<?php 

header('Content-Type: application/json; charset=UTF-8');

include 'app/Routes/HeroRoutes.php';
include 'app/Routes/CharacterRoutes.php';

use app\Routes\HeroRoutes;
use app\Routes\CharacterRoutes;

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$heroRoutes = new HeroRoutes();
$heroRoutes->handle($method, $path);

$characterRoutes = new CharacterRoutes();
$characterRoutes->handle($method, $path);

// php -S localhost:8000 main.php
?>
