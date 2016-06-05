<?php
require_once "config.php";
class BaseDatos
{
    public $conexion;
    public $db;
 
    public function conectar()
    {
        $this->conexion = mysql_connect(HOST, USUARIO, CONTRASENA);
        if ($this->conexion == 0) DIE("Lo sentimos, no se ha podido conectar con MySQL: " . mysql_error());
        $this->db = mysql_select_db(BD_NOMBRE, $this->conexion);
        if ($this->db == 0) DIE("Lo sentimos, no se ha podido conectar con la base datos: " . BD_NOMBRE);
 
        return true;
 
    }
 
    public function desconectar()
    {
        if ($this->conectar->conexion) {
            mysql_close($this->$conexion);
        }
 
    }
}

?>