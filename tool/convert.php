<?php
require 'vendor/autoload.php';
use Carbon\Carbon;
use Tightenco\Collect\Support\Collection;


function formatDate(string $date) :string
{
    if (preg_match('#(\d+/\d+/\d+)/ (\d+:\d+)#', $date, $maches)) {
      return $maches[1].' '.$maches[2];
    } else {
      throw new Exception('Can not parse date:'.$date);
    }
}

function xlsxToArray(string $path, string $sheet, string $range)
{
  $reader = new PhpOffice\PhpSpreadsheet\Reader\Xlsx();
  $spreadsheet = $reader->load($path);
  $sheet = $spreadsheet->getSheetByName($sheet);
  return new Collection($sheet->rangeToArray($range));
}


function readContacts() : array
{

  $data = xlsxToArray('downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'A2:E100');
  $result = [];
  foreach ($data as $row) {
    if (isset($row[0],$row[4])) {
      $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row[0]);
      $carbon = Carbon::parse($date);
      $result[] = [
        '日付' =>  $carbon->format('Y-m-d').'T08:00:00.000Z',
        'date' => $carbon->format('Y-m-d'),
        'short_date' => $carbon->format('m/d'),
        '曜日' => $row[1],
        'w' => $carbon->format('w'),
        '9-13時' => $row[2]?? 0,
        '13-17時' => $row[3]?? 0,
        '17-21時' => $row[4]?? 0,
        '小計' => $row[2]+$row[3]+$row[4],
      ];
    }
  }
  return [
    'date' => xlsxToArray('downloads/コールセンター相談件数-RAW.xlsx', 'Sheet1', 'H1')[0][0],
    'data' => $result
  ];
}

/*
 * 取り急ぎreadContactsからコピペ
 * 過渡期がすぎたら共通処理にしたい。→マクロ入ってる
 */
function readQuerents() : array
{
  $data = xlsxToArray('downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'A2:D100');
  $result = [];
  foreach ($data as $row) {
    if (isset($row[0],$row[3])) {
      $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row[0]);

      $carbon = Carbon::parse($date);
      $result[] = [
        '日付' =>  $carbon->format('Y-m-d').'T08:00:00.000Z',
        'date' => $carbon->format('Y-m-d'),
        'short_date' => $carbon->format('m/d'),
        '曜日' => $row[1],
        'w' => $carbon->format('w'),
        '9-17時' => $row[2] ?? 0,
        '17-翌9時' => $row[3] ?? 0,
        '小計' => $row[2]+$row[3],
      ];
    }
  }
  return [
    'date' => xlsxToArray('downloads/帰国者・接触者センター相談件数-RAW.xlsx', 'RAW', 'H1')[0][0],
    'data' => $result
  ];
}

function readPatients() : array
{
    $data = xlsxToArray('downloads/東京都患者発生発表数-RAW.xlsx', 'RAW', 'A2:J100');
    foreach ($data as $row) {

        if (isset($row[0],$row[1],$row[2],$row[3],$row[4],$row[5])) {
            $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row[1]);
            $carbon = Carbon::parse($date);
            $result[] = [
                'リリース日' =>  $carbon->format('Y-m-d').'T08:00:00.000Z',
                'date' => $carbon->format('Y-m-d'),
                '曜日' => $row[2],
                'w' => $carbon->format('w'),
                '居住地' => $row[3],
                '年代' => $row[4],
                '性別' => $row[5],
                '属性' => $row[6],
                '備考' => $row[7],
                '補足' => $row[8],
                '退院' => $row[9]
            ];
        }
    }
    return [
      'date' => xlsxToArray('downloads/東京都患者発生発表数-RAW.xlsx', 'RAW', 'M1')[0][0],
      'data' => $result
    ];
}
function patientsSummary(array $patients) : array {
    $temp = [];
    $begin = Carbon::parse('2020-01-23');
    while(true) {

        if ($begin->diffInDays(Carbon::now()) == 0) {
            break;
        } else {
            $temp[$begin->addDay()->format('Y-m-d').'T08:00:00.000Z'] =0;

        }

    }

    foreach ($patients['data'] as $row) {

        if(!isset($temp[$row['リリース日']])) {
            echo 'error'.$row['リリース日'];
        }
        $temp[$row['リリース日']] ++;
    }

    $result = [];
    foreach ($temp as $key => $value) {
        $result[] = [
            '日付' => $key,
            '小計' => $value,
        ];
    }
  return [
    'date' => $patients['date'],
    'data' => $result
  ];
}


function discharges(array $patients) : array {
  $result =[];
  foreach ($patients['data'] as $row) {
    if ($row['退院'] == '〇') {
      $result[] = $row;
    }
  }

  return [
    'date' => $patients['date'],
    'data' => $result
  ];
}


function dischargesSummary(array $patients) : array {
  $temp = [];
  $begin = Carbon::parse('2020-01-23');
  while(true) {
    if ($begin->diffInDays(Carbon::now()) == 0) {
      break;
    } else {
      $temp[$begin->addDay()->format('Y-m-d').'T08:00:00.000Z'] =0;

    }

  }
  foreach ($patients['data'] as $row) {
    if ($row['退院'] == '〇') {
      $temp[$row['リリース日']] ++;
    }
  }

  $result = [];
  foreach ($temp as $key => $value) {
    $result[] = [
      '日付' => $key,
      '小計' => $value,
    ];
  }
  return [
    'date' => $patients['date'],
    'data' => $result
  ];
}

$contacts = readContacts();
$querents = readQuerents();

$patients = readPatients();
$patients_summary = patientsSummary($patients);
$discharges_summary = dischargesSummary($patients);
$discharges = discharges($patients);
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
foreach ($data as &$arr) {
    $arr['date'] = formatDate($arr['date']);
    $timestamp = Carbon::parse()->format('YmdHis');
    if ($lastTime <= $timestamp) {
      $lastTime = $timestamp;
      $lastUpdate = Carbon::parse($arr['date'])->addDay()->format('Y/n/d 8:00');
    }
}
$data['lastUpdate'] = $lastUpdate;

file_put_contents(__DIR__.'/../data/data.json', json_encode($data,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
