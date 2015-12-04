<?php
try {
  $pdo = new PDO(
	 'mysql:host=localhost; dbname=dbname; charset=utf8',
	 'user',
	 'pass',
	 array(PDO::ATTR_EMULATE_PREPARES => false)
 );
} catch (PDOException $e) {
  exit('database connection failed.');
  // exit('database connection failed'.$e->getMessage());
}
?>
