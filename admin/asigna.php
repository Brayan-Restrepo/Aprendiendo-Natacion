<?php
require_once "conexion.php";
$db = new BaseDatos();
$doc=@$_POST['doc'];
$codentrena=@$_POST['codentrena'];
$db->conectar();
$actualiza="UPDATE nadadores SET codentrena='$codentrena' WHERE id='$doc' ";
$resultado=mysql_query($actualiza,$db->conexion);
if(!$resultado){
$actualizar[]=@array("respuesta" => "Fallo");
         $retorno=json_encode($actualizar);
}else{
$actualizar[]=@array("respuesta" => "Actualizado");
         $retorno=json_encode($actualizar);
}

         echo $retorno;


?>