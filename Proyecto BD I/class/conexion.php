<?php

class Conexion{
		
    private $host;
    private $database;
    private $usuario;
    private $pass;
    private $link;
    private $puerto;
    private $esConectado=false;
    public function __construct(
        $host =  "unah-rafaelbautista.database.windows.net", //Colocan el servidor de Azure donde esta la Base de Datos
        $database =  "BD_Ingreso_Vehiculo", //colocan el nombre de la base de datos 
        $usuario =  "Rafa-admin",//usuario
        $pass =  "Olimpia.2012",//contraseña
        $port = 3308,
        $link = null
    ){
        $this->host = $host;
        $this->database = $database;
        $this->usuario = $usuario;
        $this->pass = $pass;
        $this->port = $port;
        $this->establecerConexion();
    }
    public function establecerConexion () {
        // MySQLi
        $this->link = mysqli_connect(
            $this->host,
            $this->usuario,
            $this->pass,
            $this->database,
            $this->puerto
        );
        if (!$this->link){
            $this->esConectado = false;
            echo "No se pudo conectar con mysql";
            exit;
        } else {
            mysqli_set_charset($this->link,"utf8");
            $this->esConectado = true;
            echo "conectato amor con mysql";

        }
    }

}

?>
