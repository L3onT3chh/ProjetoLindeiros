<?php
namespace core;

use src\Config;

class Controller {

    public function getMethod()
    {
        return $_SERVER['REQUEST_METHOD'];
    }
    
    public function getRequestData(){
        switch($this->getMethod()){
            case 'GET':
                return $_GET;
                break;
            case 'PUT':
            case 'DELETE':
                parse_str(file_get_contents("php://input"), $data);
                return (array) $data;
                break;
            case 'POST':
                $data = json_decode(file_get_contents("php://input"));
                
                if($data == null){
                    $data = $_POST;
                }
                
                return (array) $data;
                break;
        }
    }

    public function render($viewName, $viewData = []) {
        if(file_exists(Config::VIEW_PATH.'pages/'.$viewName.'.php')) {
            extract($viewData);
            require Config::VIEW_PATH.'pages/'.$viewName.'.php';
        }
    }

    public function renderPartials($viewName, $viewData = []) {
        if(file_exists(Config::VIEW_PATH.'partials/'.$viewName.'.php')) {
            extract($viewData);
            require Config::VIEW_PATH.'partials/'.$viewName.'.php';
        }
    }
    
    public function returnJson($array){
        header("Content-Type: application/json");
        echo json_encode($array, JSON_UNESCAPED_UNICODE);
        exit;
    }

    public function getHeaderToken(){
        $headers = getallheaders();
        $token = (isset($headers["token"])) ? $headers["token"] : "";

        return $token;
    }

    public function statusCode($code){
        http_response_code($code);
    }

}