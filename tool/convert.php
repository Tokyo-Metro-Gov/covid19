<?php
require __DIR__.'/vendor/autoload.php';
use Carbon\Carbon;
use Tightenco\Collect\Support\Collection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

function makeDateArray($begin) : Collection{
  $begin = Carbon::parse($begin);
  $dates = [];
  while(true) {

    if ($begin->diffInDays(Carbon::now()) == 0) {
      break;
    } else {
      $dates[$begin->addDay()->format('Y-m-d').'T08:00:00.000Z'] =0;

    }
  }
  return new Collection($dates);
}
function formatDate(string $date) :string
{
    if (preg_match('#(\d+/\d+/\d+) (\d+:\d+)#', $date, $matches)) {
      $carbon = Carbon::parse($matches[1].' '.$matches[2]);
      return $carbon->format('Y/m/d H:i');
    } else {
      throw new Exception('Can not parse date:'.$date);
    }
}

function xlsxToArray(string $format, string $path, string $sheet_name, string $range, $header_range = null)
{
  $spreadsheet = new Spreadsheet();
  
  if ($format == 'Xls') {
    $reader = new PhpOffice\PhpSpreadsheet\Reader\Xls();
    $spreadsheet = $reader->load($path);
    $sheet = $spreadsheet->getSheetByName($sheet_name);
  }
  else if ($format == 'Csv') {
    $reader = new PhpOffice\PhpSpreadsheet\Reader\Csv();
    $reader->setDelimiter(',');
    $reader->setEnclosure('"');
    $reader->setSheetIndex(0);
    $spreadsheet = $reader->load($path);
    $sheet = $spreadsheet->getSheet(0);
  }

  $data =  new Collection($sheet->rangeToArray($range));
  $data = $data->map(function ($row) {
    return new Collection($row);
  });
  if ($header_range !== null) {
      $headers = xlsxToArray($format, $path, $sheet_name, $header_range)[0];
      // TODO check same columns length
      return $data->map(function ($row) use($headers){
          return $row->mapWithKeys(function ($cell, $idx) use($headers){

            return [
              $headers[$idx] => $cell
            ];
        });
      });
  }

  return $data;
}

function readContacts() : array
{

  $data = xlsxToArray('Xls', __DIR__.'/downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'A2:E100', 'A1:E1');
  return [
    'date' => xlsxToArray('Xls', __DIR__.'/downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'H1')[0][0],
    'data' => $data->filter(function ($row) {
        return $row['曜日'] && $row['17-21時'];
      })->map(function ($row) {
      $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row['日付']);
      $carbon = Carbon::parse($date);
      $row['日付'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
      $row['date'] = $carbon->format('Y-m-d');
      $row['w'] = $carbon->format('w');
      $row['short_date'] = $carbon->format('m/d');
      $row['小計'] = array_sum([
        $row['9-13時'] ?? 0,
        $row['13-17時'] ?? 0,
        $row['17-21時'] ?? 0,
      ]);
      return $row;
    })
  ];
}

/*
 * 取り急ぎreadContactsからコピペ
 * 過渡期がすぎたら共通処理にしたい。→マクロ入ってる
 */
function readQuerents() : array
{
  $data = xlsxToArray('Xls', __DIR__.'/downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'A2:D100', 'A1:D1');

  return [
    'date' => xlsxToArray('Xls', __DIR__.'/downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'H1')[0][0],
    'data' => $data->filter(function ($row) {

      return $row['曜日'] && $row['17-翌9時'];
    })->map(function ($row) {
      $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row['日付']);
      $carbon = Carbon::parse($date);
      $row['日付'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
      $row['date'] = $carbon->format('Y-m-d');
      $row['w'] = $carbon->format('w');
      $row['short_date'] = $carbon->format('m/d');
      $row['小計'] = array_sum([
        $row['9-17時'] ?? 0,
        $row['17-翌9時'] ?? 0,
      ]);
      return $row;
    })->values()
  ];
}


function readPatientsV2() : array
{
  $data = xlsxToArray('Csv', __DIR__.'/downloads/cases.csv', 'RAW', 'E2:P100', 'E1:P1');
  $base_data = $data->filter(function ($row) {
    return $row['公表_年月日'];
  })->map(function ($row) {
    $date = $row['公表_年月日'];
    $carbon = Carbon::parse($date);
    $row['公表_年月日'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
    $row['date'] = $carbon->format('Y-m-d');
    $row['w'] = $carbon->format('w');
    $row['short_date'] = $carbon->format('m/d');
    if ($row['患者_退院済フラグ'] === 0) {
      $dischargStatus = "入院";
    }
    else if ($row['患者_退院済フラグ'] === 1) {
      $dischargStatus = "退院"; 
    } 
    else {
      $dischargStatus = $row['患者_退院済フラグ']; 
    }
    $result = [
      "確定日" => $row['公表_年月日'],
      "居住地" => $row['患者_居住地'],
      "年代" => $row['患者_年代'],
      "性別" => $row['患者_性別'],
      "退院" => $dischargStatus,
      "備考" => $row['備考'],
      "date" => $carbon->format('Y-m-d'),
    ];

    return $result;
  });

  return [
    'date' => xlsxToArray('Csv', __DIR__.'/downloads/cases.csv', 'RAW', 'Q2')[0][0],
    'data' => [
      '感染者数' => makeDateArray('2020-02-13')->merge($base_data->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      })),
      '退院者数' => makeDateArray('2020-02-13')->merge($base_data->filter(function ($row) {
        return $row['退院'] == '退院';
      })->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      })),
      '死亡者数' => makeDateArray('2020-02-13')->merge($base_data->filter(function ($row) {
        return preg_match('/死亡$/', trim($row['備考']));
      })->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      })),
      '軽症' => makeDateArray('2020-02-13')->merge($base_data->filter(function ($row) {
        return $row['退院'] !== 0 && preg_match('/軽症$/', trim($row['備考']));
      })->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      })),
      '中等症' => makeDateArray('2020-02-13')->merge($base_data->filter(function ($row) {
        return $row['退院'] !== 0 && preg_match('/中等症$/', trim($row['備考']));
      })->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      })),
      '重症' => makeDateArray('2020-02-13')->merge($base_data->filter(function ($row) {
        return $row['退院'] !== 0 && preg_match('/重症$/', trim($row['備考']));
      })->groupBy('公表_年月日')->map(function ($rows) {
        return $rows->count();
      }))

    ]
  ];
}

function readPatients() : array
{
    $data = xlsxToArray('Csv', __DIR__.'/downloads/cases.csv', 'RAW', 'E2:P100', 'E1:P1');

    return [
      'date' => xlsxToArray('Csv', __DIR__.'/downloads/summary.csv', 'summary', 'B2')[0][0],
      'data' => $data->filter(function ($row) {
        return $row['公表_年月日'];
      })->map(function ($row) {
        $date = $row['公表_年月日'];
        $carbon = Carbon::parse($date);
        $row['公表_年月日'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
        $row['date'] = $carbon->format('Y-m-d');
        $row['w'] = $carbon->format('w');
        $row['short_date'] = $carbon->format('m/d');
        if ($row['患者_退院済フラグ'] === 0) {
          $dischargStatus = "入院";
        }
        else if ($row['患者_退院済フラグ'] === 1) {
          $dischargStatus = "退院"; 
        } 
        else {
          $dischargStatus = $row['患者_退院済フラグ']; 
        }
        $result = [
          "確定日" => $row['公表_年月日'],
          "居住地" => $row['患者_居住地'],
          "年代" => $row['患者_年代'],
          "性別" => $row['患者_性別'],
          "退院" => $dischargStatus,
          "備考" => $row['備考'],
          "date" => $carbon->format('Y-m-d'),
        ];

        return $result;
      })
    ];
}

function createSummary(array $patients) {
  $dates = makeDateArray('2020-02-13');

  return [
    'date' => $patients['date'],
    'data' => $dates->map(function ($val, $key) {
      return [
        '日付' => $key,
        '小計' => $val
      ];
    })->merge($patients['data']->groupBy('確定日')->map(function ($group, $key) {
      return [
        '日付' => $key,
        '小計' => $group->count()
      ];
    }))->values()
  ];


}

function discharges(array $patients) : array {

  return [
    'date' => $patients['date'],
    'data' => $patients['data']->filter(function ($row) {
      return in_array($row['退院'], ['入院勧告解除', '退院']);
    })->values()
  ];
}

function readInspections() : array{
  $data = xlsxToArray('Xls', __DIR__.'/downloads/検査実施日別状況.xlsx', '入力シート', 'A2:J100', 'A1:J1');
  $data = $data->filter(function ($row) {
    return $row['疑い例検査'] !== null;
  });
  return [
    'date' => '2020/3/5/ 00:00', //TODO 現在のエクセルに更新日付がないので変更する必要あり
    'data' => $data
  ];
}

function readInspectionsSummary(array $inspections) : array
{
  return [
    'date' => $inspections['date'],
    'data' => [
      '都内' => $inspections['data']->map(function ($row) {
        return str_replace(' ', '', $row['（小計①）']);
      }),
      'その他' => $inspections['data']->map(function ($row) {
        return str_replace(' ', '', $row['（小計②）']);
      }),
    ],
    'labels' =>$inspections['data']->map(function ($row) {
        return Carbon::parse($row['判明日'])->format('n/j');
    })
  ];
}


// $contacts = readContacts();
// $querents = readQuerents();

$patients = readPatients();
$patients_summary = createSummary($patients);
$better_patients_summary = readPatientsV2();

$discharges = discharges($patients);
$discharges_summary = createSummary($discharges);

// $inspections =readInspections();
// $inspections_summary =readInspectionsSummary($inspections);

$data = compact([
  // 'contacts',
  // 'querents',
  'patients',
  'patients_summary',
  // 'discharges_summary',
  // 'discharges',
  // 'inspections',
  // 'inspections_summary',
  // 'better_patients_summary'
]);
$lastUpdate = '';
$lastTime = 0;
foreach ($data as $key => &$arr) {
    $arr['date'] = formatDate($arr['date']);
    $timestamp = Carbon::parse()->format('YmdHis');
    if ($lastTime <= $timestamp) {
      $lastTime = $timestamp;
      $lastUpdate = Carbon::parse($timestamp)->addHours(9)->format('Y/m/d H:i');
    }
}
$data['lastUpdate'] = $lastUpdate;

$data['main_summary'] = [
  'attr' => '検査実施人数',
  'value' => xlsxToArray('Csv', __DIR__.'/downloads/summary.csv', 'summary', 'A2')[0][0],
  'children' => [
    [
      'attr' => '陽性患者数（県外感染者含む）',
      'value' => $better_patients_summary['data']['感染者数']->sum(),
      'children' => [
        [
          'attr' => '入院中（調整中含む）',
          'value' => $better_patients_summary['data']['感染者数']->sum() - $better_patients_summary['data']['退院者数']->sum() - $better_patients_summary['data']['死亡者数']->sum(),
          'children' => [
            [
              'attr' => '軽症・中等症',
              'value' => $better_patients_summary['data']['軽症']->sum() + $better_patients_summary['data']['中等症']->sum()
            ],
            [
              'attr' => '重症',
              'value' => $better_patients_summary['data']['重症']->sum()
            ]
          ]
        ],
        [
          'attr' => '退院',
          'value' => $better_patients_summary['data']['退院者数']->sum()
        ],
        [
          'attr' => '死亡',
          'value' => $better_patients_summary['data']['死亡者数']->sum()
        ]

      ]
    ]
  ]
];

file_put_contents(__DIR__.'/../data/data.json', json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));

