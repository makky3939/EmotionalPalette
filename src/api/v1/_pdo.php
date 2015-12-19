<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
try {
  $pdo = new PDO(
	 'mysql:host=localhost; dbname=user; charset=utf8',
	 'user',
	 'password',
	 array(PDO::ATTR_EMULATE_PREPARES => false)
 );
} catch (PDOException $e) {
  exit('database connection failed.');
}
?>
