<?php
try {
  $pdo = new PDO(
	 'mysql:host=localhost; dbname=s1311495; charset=utf8',
	 's1311495',
	 'tsukuba',
	 array(PDO::ATTR_EMULATE_PREPARES => false)
 );
} catch (PDOException $e) {
  exit('database connection failed.');
  // exit('database connection failed'.$e->getMessage());
}
?>
