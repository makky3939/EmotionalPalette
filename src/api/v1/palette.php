<?php
header('Content-Type: text/javascript; charset=utf-8');
include '_pdo.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    try {
      $id = $_GET['id'];
      $pdo -> beginTransaction();
      $statement = $pdo -> prepare("
        select sentence_id, s.text, c.red, c.green, c.blue, s.created_at
        from color as c, sentence as s
        where c.sentence_id = s.id and s.id = :id
        order by c.id"
      );
      $statement -> bindParam(':id', $id, PDO::PARAM_INT);
      $statement -> execute();
      $pdo -> commit();
      $obj;
      foreach ($statement -> fetchAll(PDO::FETCH_GROUP) as $row => $item) {
        $obj[] = array(
          'id' => $row,
          'text' => $item[0]['text'],
          'createdAt' => $item[0]['created_at'],
          'colors' => $item
        );
      }
    } catch (PDOException $e) {
      exit('{"code": 400, "message": "bad request"}');
    }
    exit(json_encode($obj));
    break;

  default:
    exit('{"code": 400, "message": "bad request"}');
}
?>
