<?php
header("Content-Type: text/javascript; charset=utf-8");
include 'pdo.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    try {
      $sentenceId = $_POST['id'];
      $pdo -> beginTransaction();
      $statement = $pdo ->  prepare('INSERT INTO favorite (sentence_id) VALUES (:sentenceId)');
      $statement -> bindParam(':sentenceId', $sentenceId, PDO::PARAM_INT);
      $statement -> execute();
      $sentenceId = $pdo -> lastInsertId();
      $pdo -> commit();
    } catch (PDOException $e) {
      exit('{"code": 400, "message": "bad request"}');
    }
    exit(json_encode($sentenceId));
    break;

  case 'GET':
    try {
      $sentenceId = $_GET['id'];
      $pdo -> beginTransaction();
      $statement = $pdo -> prepare('select count(id) from favorite where sentence_id = :sentenceId');
      $statement -> bindParam(':sentenceId', $sentenceId, PDO::PARAM_INT);
      $statement -> execute();
      $res = $statement -> fetchAll();
      $pdo -> commit();
    } catch (PDOException $e) {
      exit('{"code": 400, "message": "bad request"}');
    }
    exit(json_encode($res[0][0]));
    break;

  default:
    exit('{"code": 400, "message": "bad request"}');
}
?>
