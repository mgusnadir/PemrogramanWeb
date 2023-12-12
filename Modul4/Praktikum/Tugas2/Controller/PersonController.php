<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "Models/Person.php";
include "Models/Adult.php";
include "Data/Data.php";

use Models\Adult;
use Traits\ResponseFormatter;

class PersonController
{
    use ResponseFormatter;

    public function getPersonInfo(Adult $adult)
    {
        $response = [
            "name" => $adult->getName(),
            "age" => $adult->getAge(),
            "calories" => $adult->calculateCalories()
        ];

        return $response;
    }
}
