<?php

namespace src\Controllers;

use core\Controller;
use src\Config;
use src\Models\Utils\Doc;


class HomeController extends Controller
{
    public $description = "";

    public function index()
    {
        $d = new Doc();

        $controllers = $d->getControllersName();

        header("Location: " . Config::BASE_DIR . "doc/" . $controllers[0]);
        exit;
    }

    public function doc($params)
    {
        if (isset($params["control"])) {
            $controller = addslashes($params["control"]);

            $pass = false;
            $data = array();
            $d = new Doc();

            $data["controllersList"] = $d->getControllersName();
            $data["controllersContent"] = [];
            $data["url"] = Config::BASE_DIR;

            if (in_array($controller, $data["controllersList"])) {
                $data["controllerChoosen"] = $controller;
                $data["controllersContent"] = $d->getControllerInfo($controller);
                $pass = true;
            }

            if(file_exists(Config::VIEW_PATH.'partials/'.$controller.'.php')){
                $data["controllerChoosen"] = $controller;
                $data["outsideContent"] = $controller;
                $pass = true;
            }

            if(!$pass){
                echo "404 - Não encontrado";
                exit;
            }

            $this->render("doc", $data);
        }
    }
}
