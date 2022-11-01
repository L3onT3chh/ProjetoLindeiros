<?php

namespace src\Models\Utils;

use core\Router;

class Doc{

    public function getControllersName(){
        $routesList = Router::getRoutes();
        $controllers = [];
        $method = ["get", "post", "put", "delete"];

        for($i = 0; $i <= 3; $i++){
            foreach($routesList[$method[$i]] as $route){
                $controller = explode("@", $route["value"]);
                $controller = str_replace("Controller", "", $controller[0]);

                if(!in_array($controller, $controllers) && !empty($route["description"])){
                    $controllers[] = $controller;
                }
            }
        }
        
        return $controllers;
    }

    public function getControllerInfo($controllerChoosen){
        $routesList = Router::getRoutes();
        $controllers = [];
        $method = ["get", "post", "put", "delete"];
        $count = 0;

        for($i = 0; $i <= 3; $i++){
            foreach($routesList[$method[$i]] as $path => $route){
                $controller = explode("@", $route["value"]);

                $tempController = "src\Controllers\\$controller[0]";
                $definedController = new $tempController();

                $controller = str_replace("Controller", "", $controller[0]);

                if($controller == $controllerChoosen){
                    $controllers["title"] = $definedController->description;
                    $controllers[$count]["path"] = $path;
                    $controllers[$count]["desc"] = $route["description"];
                    $count++;
                }
            }
        }

        return $controllers;
    }
}