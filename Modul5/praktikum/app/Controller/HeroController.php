<?php

namespace app\Controller;

include 'app/Models/Hero.php';
include 'app/Traits/ApiResponseFormatter.php';

use app\Models\Heroes;
use app\Traits\ApiResponseFormatter;

class HeroController
{
    use ApiResponseFormatter;

    public function index()
    {
        $heroesModel = new Heroes();
        $response = $heroesModel->findAll();
        return $this->apiResponse(200, 'Success', $response);
    }

    public function getById($id)
    {
        $heroesModel = new Heroes();
        $response = $heroesModel->findById($id);
        return $this->apiResponse(200, 'Success', $response);
    }

    public function insert()
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $heroesModel = new Heroes();
        $response = $heroesModel->create([
            'ClassName' => $inputData['ClassName'],
            'BaseHealth' => $inputData['BaseHealth'],
            'BaseMana' => $inputData['BaseMana'],
            'BaseAttack' => $inputData['BaseAttack'],
        ]);

        return $this->apiResponse(200, 'Success', $response);
    }

    public function update($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $heroesModel = new Heroes();
        $response = $heroesModel->update([
            'ClassName' => $inputData['ClassName'],
            'BaseHealth' => $inputData['BaseHealth'],
            'BaseMana' => $inputData['BaseMana'],
            'BaseAttack' => $inputData['BaseAttack'],
        ], $id);

        return $this->apiResponse(200, 'Success', $response);
    }

    public function destroy($id)
    {
        $heroesModel = new Heroes();
        $response = $heroesModel->destroy($id);

        return $this->apiResponse(200, 'Success', $response);
    }
}
?>
