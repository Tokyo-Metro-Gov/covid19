<?php
require 'vendor/autoload.php';
use Carbon\Carbon;
use Tightenco\Collect\Support\Collection;

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
    if (preg_match('#(\d+/\d+/\d+)/ (\d+:\d+)#', $date, $maches)) {
      $carbon = Carbon::parse($maches[1].' '.$maches[2]);
      return $carbon->format('Y/m/d H:i');
    } else {
      throw new Exception('Can not parse date:'.$date);
    }
}

function xlsxToArray(string $path, string $sheet_name, string $range, $header_range = null)
{
  $reader = new PhpOffice\PhpSpreadsheet\Reader\Xlsx();
  $spreadsheet = $reader->load($path);
  $sheet = $spreadsheet->getSheetByName($sheet_name);
  $data =  new Collection($sheet->rangeToArray($range));
  $data = $data->map(function ($row) {
    return new Collection($row);
  });
  if ($header_range !== null) {
      $headers = xlsxToArray($path, $sheet_name, $header_range)[0];
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

  $data = xlsxToArray('downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'A2:E100', 'A1:E1');
  return [
    'date' => xlsxToArray('downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'H1')[0][0],
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
  $data = xlsxToArray('downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'A2:D100', 'A1:D1');

  return [
    'date' => xlsxToArray('downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'H1')[0][0],
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

function readPatients() : array
{
    $data = xlsxToArray('downloads/東京都患者発生発表数-RAW.xlsx', 'RAW', 'A2:J100', 'A1:J1');

    return [
      'date' => xlsxToArray('downloads/東京都患者発生発表数-RAW.xlsx', 'RAW', 'M1')[0][0],
      'data' => $data->filter(function ($row) {
        return $row['リリース日'];
      })->map(function ($row) {
        $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row['リリース日']);
        $carbon = Carbon::parse($date);
        $row['リリース日'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
        $row['date'] = $carbon->format('Y-m-d');
        $row['w'] = $carbon->format('w');
        $row['short_date'] = $carbon->format('m/d');
        return $row;
      })
    ];
}
function createSummary(array $patients) {
  $dates = makeDateArray('2020-01-23');

  return [
    'date' => $patients['date'],
    'data' => $dates->map(function ($val, $key) {
      return [
        '日付' => $key,
        '小計' => $val
      ];
    })->merge($patients['data']->groupBy('リリース日')->map(function ($group, $key) {
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
      return $row['退院'] === '〇';
    })->values()
  ];
}



$contacts = readContacts();
$querents = readQuerents();

$patients = readPatients();
$patients_summary = createSummary($patients);

$discharges = discharges($patients);
$discharges_summary = createSummary($discharges);
$data = compact([
  'contacts',
  'querents',
  'patients',
  'patients_summary',
  'discharges_summary',
  'discharges'
]);
$lastUpdate = '';
$lastTime = 0;
foreach ($data as $key => &$arr) {
    $arr['date'] = formatDate($arr['date']);
    $timestamp = Carbon::parse()->format('YmdHis');
    if ($lastTime <= $timestamp) {
      $lastTime = $timestamp;
      $lastUpdate = Carbon::parse($arr['date'])->addDay()->format('Y/n/d 8:00');
    }
}
$data['lastUpdate'] = $lastUpdate;

file_put_contents(__DIR__.'/../data/data.json', json_encode($data,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
