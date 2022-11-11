<?php
namespace core;

use src\Config;

class Request{

    public static function getAbsoluteUrl() {
        $url = filter_input(INPUT_GET, 'url');
        $url = str_replace(Config::BASE_DIR, '', $url);
        return '/'.$url;
    }

    public static function getMethod() {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

}