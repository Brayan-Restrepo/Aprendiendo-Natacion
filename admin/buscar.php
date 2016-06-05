<?php
require_once "conexion.php";
$db = new BaseDatos();

$consulta="SELECT id,nombre,edad,practicado_antes,usuario,contrasena FROM  nadadores ORDER BY nombre";
$db->conectar();
$resultado=mysql_query($consulta,$db->conexion);

$i=0;
$tabla = '';
$vacio='';
while(($row=mysql_fetch_array($resultado,MYSQL_NUM))!=false)
{

$tabla.='{"Documento":"'.$row[0].'","Nombres":"'.$row[1].'","Edad":"'.$row[2].'","Practicado_antes":"'.$row[3].'","Usuario":"'.$row[4].'","Contrasena":"'.$row[5].'","Opcion":"'.$vacio.'","Opcion1":"'.$vacio.'"},';
$i++;

}



$tabla = substr($tabla,0,strlen($tabla)-1);

echo '{"data":['.$tabla.']}';
$db->desconectar();
?>