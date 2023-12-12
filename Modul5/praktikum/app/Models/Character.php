<?php

namespace app\Models;

use app\Config\DatabaseConfig;
use mysqli;

class Characters extends DatabaseConfig 
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
        $sql = 'SELECT characters.CharacterID, heroes.HeroClassID, characters.HeroClass, characters.CharacterName, characters.SpecialAbilities,  characters.Level,  heroes.BaseHealth, heroes.BaseMana, heroes.BaseAttack, characters.Updated_At, characters.Created_At
        FROM characters 
        JOIN heroes ON characters.HeroClass = heroes.ClassName';
        $result = $this->conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function findById($id)
    {
        // $sql = 'SELECT * FROM characters WHERE CharacterID = ?';
        $sql = 'SELECT characters.CharacterID, heroes.HeroClassID, characters.HeroClass, characters.CharacterName, characters.SpecialAbilities,  characters.Level,  heroes.BaseHealth, heroes.BaseMana, heroes.BaseAttack, characters.Updated_At, characters.Created_At
        FROM characters
        JOIN heroes ON characters.HeroClass = heroes.ClassName
        WHERE characters.CharacterID = ?';
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
        $characterName = $data['CharacterName'];
        $heroClass = $data['HeroClass'];
        $level = $data['Level'];
        $specialAbilities = $data['SpecialAbilities'];

        $query = 'INSERT INTO characters (CharacterName, HeroClass, Level, SpecialAbilities) VALUES (?, ?, ?, ?)';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('ssis', $characterName, $heroClass, $level, $specialAbilities);
        $stmt->execute();
    }

    public function update($data, $id)
    {
        $characterName = $data['CharacterName'];
        $heroClass = $data['HeroClass'];
        $level = $data['Level'];
        $specialAbilities = $data['SpecialAbilities'];

        $query = 'UPDATE characters SET CharacterName = ?, HeroClass = ?, Level = ?, SpecialAbilities = ? WHERE CharacterID = ?';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('ssisi', $characterName, $heroClass, $level, $specialAbilities, $id);
        $stmt->execute();
    }

    public function destroy($id)
    {
        $query = 'DELETE FROM characters WHERE CharacterID = ?';

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
    }
}
?>
