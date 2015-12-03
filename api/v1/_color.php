<?php
$dict;

if (! ($fp = fopen ( "./tweet.model", "r" ))) {
 exit('{"code": 500, "message": "can not file open"}');
}

while (! feof ($fp)) {
 $line = fgets ($fp);
 $vector = explode(' ', $line);
 $name = array_shift($vector);
 $dict[$name] = $vector;
}

fclose ($fp);

function calculateHex($dict, $source, $target) {
  $num = 0.0;
  $deamonX = 0.0;
  $deamonY = 0.0;

  foreach ($dict[$source] as $key => $value) {
    $num += floatval($value) * floatval($dict[$target][$key]);
    $deamonX += floatval($value) ** 2;
    $deamonY += floatval($dict[$target][$key]) ** 2;
  }

  return intval(($num / sqrt($deamonX) * sqrt($deamonY)) * -255);
}

function calculateRgb($dict, $keyword) {
  $r = calculateHex($dict, $keyword, "恐");
  $g = calculateHex($dict, $keyword, "悲");
  $b = calculateHex($dict, $keyword, "警戒");
  return array($r, $g, $b);
}

?>
