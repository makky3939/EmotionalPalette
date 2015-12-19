<?php
header('Content-Type: text/javascript; charset=utf-8');
include '_pdo.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    try {
      $text = $_POST['text'];
      $pdo -> beginTransaction();
      $statement = $pdo -> prepare("
        select
          s.id, count(f.created_at) as size
        from
          favorite as f, sentence as s
        where
          f.sentence_id = s.id
        group by
          f.sentence_id
        order by size desc
        limit 6;"
      );
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
