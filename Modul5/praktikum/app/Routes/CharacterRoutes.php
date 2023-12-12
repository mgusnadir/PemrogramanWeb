<?php

namespace app\Routes;

include 'app/Controller/CharacterController.php';

use app\Controller\CharacterController;

class CharacterRoutes 
{
    public function handle($method, $path)
    {
        if ($method === 'GET' && $path === '/api/character')
        {
            $controller = new CharacterController();
            echo $controller->index();
        }

        if ($method === 'GET' && strpos($path, '/api/character/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new CharacterController();
            echo $controller->getById($id);
        }
        
        if ($method === 'POST' && $path === '/api/character')
        {
            $controller = new CharacterController();
            echo $controller->insert();
        }
        
        if ($method === 'PUT' && strpos($path, '/api/character/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new CharacterController();
            echo $controller->update($id);
        }

        if ($method === 'DELETE' && strpos($path, '/api/character/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new CharacterController();
            echo $controller->destroy($id);
        }
    }
}
?>
