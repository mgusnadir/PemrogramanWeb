<?php

include "Controller/PersonController.php";

use Controller\PersonController;
use Data\AdultData;

$adultData = AdultData::$adults;
$personController = new PersonController;

$responses = [];

foreach ($adultData as $adultInfo) {
    try {
        $adult = new \Models\Adult($adultInfo["name"], $adultInfo["age"], $adultInfo["dailyCaloricIntake"]);
        $responses[] = $personController->getPersonInfo($adult);
    } catch (\Exception $e) {
        $responses[] = $personController->responseFormatter(500, "Error", $e->getMessage());
    }
}

echo json_encode($responses, JSON_PRETTY_PRINT) . PHP_EOL;
