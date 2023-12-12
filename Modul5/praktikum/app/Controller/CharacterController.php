<?php

namespace app\Controller;

include 'app/Models/Character.php';

use app\Models\Characters;
use app\Traits\ApiResponseFormatter;

class CharacterController
{
    use ApiResponseFormatter;

    public function index()
    {
        $charactersModel = new Characters();
        $response = $charactersModel->findAll();
        return $this->apiResponse(200, 'Success', $response);
    }

    public function getById($id)
    {
        $charactersModel = new Characters();
        $response = $charactersModel->findById($id);
        return $this->apiResponse(200, 'Success', $response);
    }

    public function insert()
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $charactersModel = new Characters();
        $response = $charactersModel->create([
            'CharacterName' => $inputData['CharacterName'],
            'HeroClass' => $inputData['HeroClass'],
            'Level' => $inputData['Level'],
            'SpecialAbilities' => $inputData['SpecialAbilities'],
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

        $charactersModel = new Characters();
        $response = $charactersModel->update([
            'CharacterName' => $inputData['CharacterName'],
            'HeroClass' => $inputData['HeroClass'],
            'Level' => $inputData['Level'],
            'SpecialAbilities' => $inputData['SpecialAbilities'],
        ], $id);

        return $this->apiResponse(200, 'Success', $response);
    }

    public function destroy($id)
    {
        $charactersModel = new Characters();
        $response = $charactersModel->destroy($id);

        return $this->apiResponse(200, 'Success', $response);
    }
}
