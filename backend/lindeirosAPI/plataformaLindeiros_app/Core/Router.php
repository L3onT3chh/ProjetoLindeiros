<?php
namespace core;

use core\RouterBase;

class Router extends RouterBase {
    public static $routes;

    public static function get($endpoint, $trigger, $description = []) {
        Router::$routes['get'][$endpoint]["value"] = $trigger;
        Router::$routes['get'][$endpoint]["description"] = $description;
    }

    public static function post($endpoint, $trigger, $description = []) {
        Router::$routes['post'][$endpoint]["value"] = $trigger;
        Router::$routes['post'][$endpoint]["description"] = $description;
    }

    public static function put($endpoint, $trigger, $description = []) {
        Router::$routes['put'][$endpoint]["value"] = $trigger;
        Router::$routes['put'][$endpoint]["description"] = $description;
    }

    public static function delete($endpoint, $trigger, $description = []) {
        Router::$routes['delete'][$endpoint]["value"] = $trigger;
        Router::$routes['delete'][$endpoint]["description"] = $description;
    }

    public static function getRoutes() {
        return Router::$routes;
    }

}