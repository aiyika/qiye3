<?php
header('content-type:text/html;charset="utf-8"'); 

$file=$_POST['name'];
$content=file_get_contents("bjcs/".$file);
echo $content;
?>