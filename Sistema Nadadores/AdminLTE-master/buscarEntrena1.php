<?php
require_once "conexion.php";
$db = new BaseDatos();
$codigo=@$_GET['codEntrena'];

$consulta="SELECT entrena.nombre,entrena.duracion,estil.nombre,entreestil.ejercicio,entreestil.series,entreestil.duracion,entreestil.detalle,entreestil.sesion,entreestil.descanso_serie FROM entrenamiento entrena,estilo estil,entrena_estilo entreestil WHERE entrena.codigo='$codigo' AND entrena.codigo=entreestil.cod_entrena AND estil.codigo=entreestil.cod_estilo ORDER BY entreestil.sesion";
$db->conectar();
$resultado=mysql_query($consulta,$db->conexion);

$i=0;
$tabla = '';
$vacio='';
while(($row=mysql_fetch_array($resultado,MYSQL_NUM))!=false)
{

$tabla.='{"Entrenamiento":"'.$row[0].'","Durtotal":"'.$row[1].'","Estilo":"'.$row[2].'","Ejercicio":"'.$row[3].'","Series":"'.$row[4].'","Duracion":"'.$row[5].'","Detalle":"'.$row[6].'","Sesion":"'.$row[7].'","Descanso":"'.$row[8].'"},';
$i++;

}

$tabla = substr($tabla,0,strlen($tabla)-1);

echo '{"data":['.$tabla.']}';
$db->desconectar();
?>