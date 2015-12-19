<?php
  include './api/v1/_pdo.php';

  try {
    $pdo -> beginTransaction();
    $statement = $pdo -> prepare('select * from dictionary');
    $statement -> execute();
    $res = $statement -> fetchAll();
    $pdo -> commit();
  } catch (PDOException $e) {
    exit('{"code": 400, "message": "bad request"}');
  }
?>


<!DOCTYPE html>
<html lang='jp'>
  <head>
    <meta charset='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width', 'initial-scale'='1' />
    <title>EmotionalPalette</title>
  </head>
  <body>
    <h1>dictionary table</h1>
    <hr />
    <pre><?php echo(var_dump($res)); ?></pre>
    <hr />
  </body>
</html>
