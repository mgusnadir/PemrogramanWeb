<?php

namespace app\Routes;

include 'app/Controller/HeroController.php';

use app\Controller\HeroController;

class HeroRoutes 
{
    public function handle($method, $path)
    {
        if ($method === 'GET' && $path === '/api/hero')
        {
            $controller = new HeroController();
            echo $controller->index();
        }

        if ($method === 'GET' && strpos($path, '/api/hero/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new HeroController();
            echo $controller->getById($id);
        }
        
        if ($method === 'POST' && $path === '/api/hero')
        {
            $controller = new HeroController();
            echo $controller->insert();
        }
        
        if ($method === 'PUT' && strpos($path, '/api/hero/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new HeroController();
            echo $controller->update($id);
        }

        if ($method === 'DELETE' && strpos($path, '/api/hero/') === 0)
        {
            $parthParts = explode('/', $path);
            $id = $parthParts[count($parthParts) - 1];

            $controller = new HeroController();
            echo $controller->destroy($id);
        }
    }
}
?>
