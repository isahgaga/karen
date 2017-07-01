<?php
$dir = "./";

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
    	
     $myfile = file_get_contents($file);
//echo fread($myfile,filesize($file));
//fclose($myfile);
echo $myfile;
    }
    closedir($dh);
  }
}
?>