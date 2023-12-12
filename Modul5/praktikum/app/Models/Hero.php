<?php

namespace app\Models;

include 'app/config/DatabaseConfig.php';

use app\Config\DatabaseConfig;
use mysqli;

class Heroes extends DatabaseConfig 
{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        
        if ($this->conn->connect_error){
            die('Connection Failed: ' . $this->conn->connect_error);
        }
    }

    public function findAll()
    {
        $sql = 'SELECT * FROM heroes';
        $result = $this->conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function findById($id)
    {
        $sql = 'SELECT * FROM heroes WHERE HeroClassID = ?';
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function create($data)
    {
        $className = $data['ClassName'];
        $baseHealth = $data['BaseHealth'];
        $baseMana = $data['BaseMana'];
        $baseAttack = $data['BaseAttack'];

        $query = 'INSERT INTO heroes (ClassName, BaseHealth, BaseMana, BaseAttack) VALUES (?, ?, ?, ?)';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('siii', $className, $baseHealth, $baseMana, $baseAttack);
        $stmt->execute();
    }

    public function update($data, $id)
    {
        $className = $data['ClassName'];
        $baseHealth = $data['BaseHealth'];
        $baseMana = $data['BaseMana'];
        $baseAttack = $data['BaseAttack'];

        $query = 'UPDATE heroes SET ClassName = ?, BaseHealth = ?, BaseMana = ?, BaseAttack = ? WHERE HeroClassID = ?';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('ssiii', $className, $baseHealth, $baseMana, $baseAttack, $id);
        $stmt->execute();
    }

    public function destroy($id)
    {
        $query = 'DELETE FROM heroes WHERE HeroClassID = ?';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
    }
}
?>
