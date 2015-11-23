<?php
header('Content-Type: text/javascript; charset=utf-8');
include 'pdo.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    try {
      $text = $_POST['text'];
      $pdo -> beginTransaction();
      $statement = $pdo ->  prepare("INSERT INTO sentence (text) VALUES (:text)");
      $statement -> bindParam(':text', $text, PDO::PARAM_STR);
      $statement -> execute();
      $sentenceId = $pdo -> lastInsertId();
      $pdo -> commit();

      for ($i = 1; $i <= 5; $i++) {
        $pdo -> beginTransaction();
        $statement = $pdo  ->  prepare("INSERT INTO color (sentence_id, red, green, blue) VALUES (:sentence_id, :red, :green, :blue)");
        $statement -> bindParam(':sentence_id', $sentenceId, PDO::PARAM_INT);
        $statement -> bindParam(':red', rand(0, 255), PDO::PARAM_INT);
        $statement -> bindParam(':green', rand(0, 255), PDO::PARAM_INT);
        $statement -> bindParam(':blue', rand(0, 255), PDO::PARAM_INT);
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
