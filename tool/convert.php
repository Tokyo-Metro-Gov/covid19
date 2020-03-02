<?php
require 'vendor/autoload.php';
use Carbon\Carbon;





function readContacts() : array
{
    $reader = new PhpOffice\PhpSpreadsheet\Reader\Xlsx();
    $spreadsheet = $reader->load('downloads/コールセンター相談件数-RAW.xlsx');
    $sheet = $spreadsheet->getSheetByName("Sheet1");
    $data = $sheet->rangeToArray("A2:E100");
    $result = [];
    foreach ($data as $row) {
        if (isset($row[0],$row[1],$row[2],$row[3],$row[4])) {
            $date = '2020-'.str_replace(['月', '日'], ['-', ''], $row[0]);
            $carbon = Carbon::parse($date);
            $result[] = [
                '日付' =>  $carbon->format('Y-m-d').'T08:00:00.000Z',
                'date' => $carbon->format('Y-m-d'),
                'short_date' => $carbon->format('m/d'),
                '曜日' => $row[1],
                'w' => $carbon->format('w'),
                '9-13時' => $row[2],
                '13-17時' => $row[3],
                '17-21時' => $row[4],
                '小計' => $row[2]+$row[3]+$row[4],
                //'累積' => $row[2]+$row[3]+$row[4] + ($result[count($result)-1]['累積'] ?? 0)
            ];
        }
    }
    return [
      'date' => $sheet->getCell("H1")->getValue(),
      'data' => $result
    ];
}

function readPatients() : array
{
    $reader = new PhpOffice\PhpSpreadsheet\Reader\Xlsx();
    $spreadsheet = $reader->load('downloads/東京都患者発生発表数-RAW.xlsx');
    $sheet = $spreadsheet->getSheetByName("RAW");
    $data = $sheet->rangeToArray("A2:J100");
    $result = [];

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
            ];
        }
    }
    return [
      'date' => $sheet->getCell("M1")->getValue(),
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

$patients = readPatients();
$patients_summary = patientsSummary($patients);
$contacts = readContacts();


file_put_contents(__DIR__.'/../data/data.json', json_encode(compact([
    'contacts',
    'patients',
    'patients_summary',
]),JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
