<?php
require_once "conexion.php";
$db = new BaseDatos();
$doc=@$_POST['doc'];
$seleccion=@$_POST['seleccion'];
$db->conectar();
if($seleccion=='1'){
$nombre=@$_POST['nombre'];
$edad=@$_POST['edad'];
$estatura=@$_POST['estatura'];
$practicado_antes=@$_POST['practicado_antes'];
$usuario=@$_POST['usuario'];
$contrasena=@$_POST['contrasena'];
$agrega="INSERT INTO nadadores (id, nombre, edad, estatura, practicado_antes, usuario, contrasena) VALUES ('".$doc."','".$nombre."','".$edad."','".$estatura."','".$practicado_antes."','".$usuario."','".$contrasena."')";
$resultado=mysql_query($agrega,$db->conexion);

if(!$resultado){
$insertar[]=@array("respuesta" => "fallo al insertar");
         $retorno=json_encode($insertar);
}else{
$insertar[]=@array("respuesta" => "Insertado");
         $retorno=json_encode($insertar);
}

         echo $retorno;
}else if($seleccion=='2'){
$elimina="DELETE FROM nadadores WHERE id='".$doc."'";
$resultado=mysql_query($elimina,$db->conexion);
if(!$resultado){
$eliminar[]=@array("respuesta" => "Fallo al eliminar");
         $retorno=json_encode($eliminar);
}else{
$eliminar[]=@array("respuesta" => "Eliminado");
         $retorno=json_encode($eliminar);
}

         echo $retorno;
}else if($seleccion=='3'){
$nombre=@$_POST['nombre'];
$edad=@$_POST['edad'];
$practicado_antes=@$_POST['practicado_antes'];
$usuario=@$_POST['usuario'];
$contrasena=@$_POST['contrasena'];
$docant=@$_POST['docant'];
$actualiza="UPDATE nadadores SET id='".$doc."',nombre='".$nombre."',edad='".$edad."',practicado_antes='".$practicado_antes."',usuario='".$usuario."',contrasena='".$contrasena."' WHERE id='".$docant."' ";
$resultado=mysql_query($actualiza,$db->conexion);
if(!$resultado){
$actualizar[]=@array("respuesta" => "Fallo");
         $retorno=json_encode($actualizar);
}else{
$actualizar[]=@array("respuesta" => "Actualizado");
         $retorno=json_encode($actualizar);
}

         echo $retorno;
}

?>