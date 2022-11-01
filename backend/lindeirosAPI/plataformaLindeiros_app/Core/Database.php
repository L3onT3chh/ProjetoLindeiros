<?php
namespace core;

use src\Config;

class Database {
    private static $conect;

    public static function getInstance() {
        if(!isset(self::$conect)) {
            self::$conect = new \PDO(Config::DB_DRIVER.":dbname=".Config::DB_NAME.";host=".Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD);
        }
        return self::$conect;
    }
}