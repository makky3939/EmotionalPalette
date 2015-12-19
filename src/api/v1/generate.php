<?php
header('Content-Type: text/javascript; charset=utf-8');
include '_pdo.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    try {
      $text = $_POST['text'];

      if($text == '') {
        exit('{"code": 400, "message": "bad request"}');
      }

      $pdo -> beginTransaction();
      $statement = $pdo ->  prepare("INSERT INTO sentence (text) VALUES (:text)");
      $statement -> bindParam(':text', $text, PDO::PARAM_STR);
      $statement -> execute();
      $sentenceId = $pdo -> lastInsertId();
      $pdo -> commit();

      $keyword = $text;
      $keywords = preg_split("//u", $keyword, -1, PREG_SPLIT_NO_EMPTY);
      $keywords = implode("|", $keywords);

      $pdo -> beginTransaction();
      $statement = $pdo ->  prepare("
        select red, green, blue
        from dictionary
        where word REGEXP :keyword
        limit 1
      ");

      $statement -> bindParam(':keyword', $keywords);
      $statement -> execute();
      $colorCode = $statement -> fetchAll();
      $pdo -> commit();

      for ($i = 0; $i < 5; $i++) {
        $r = intval($colorCode[0][0]);
        $r = $r + ($i * 20);

        $g = intval($colorCode[0][1]);
        $g = $g + ($i * 20);

        $b = intval($colorCode[0][2]);
        $b = $b + ($i * 20);

        if($i == 1) {
          $_tmp = $b;
          $b = $g;
          $g = $_tmp;
        }
        $pdo -> beginTransaction();
        $statement = $pdo  ->  prepare("INSERT INTO color (sentence_id, red, green, blue) VALUES (:sentence_id, :red, :green, :blue)");
        $statement -> bindParam(':sentence_id', $sentenceId, PDO::PARAM_INT);
        $statement -> bindParam(':red', $r, PDO::PARAM_INT);
        $statement -> bindParam(':green', $g, PDO::PARAM_INT);
        $statement -> bindParam(':blue', $b, PDO::PARAM_INT);
        $statement -> execute();
        $pdo -> commit();
      }

    } catch (PDOException $e) {
      exit('{"code": 400, "message": "bad request"}');
    }
    exit(json_encode($sentenceId));

    break;

  default:
    exit('{"code": 400, "message": "bad request"}');
}
?>
