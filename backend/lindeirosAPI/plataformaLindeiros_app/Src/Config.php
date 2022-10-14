<?php
namespace src;

class Config {
    const BASE_DIR = 'https://www.api.wilgner.com.br/lindeiros/';

    const DB_DRIVER = 'mysql';
    const DB_HOST = 'localhost';
    const DB_NAME = 'carda820_db_plataformalindeiros';
    CONST DB_USER = 'carda820_lindeiros';
    const DB_PASSWORD = '=82+?FA%KA)P';
    CONST JWT_SECRET = 'ws$5$8ad*46w&SQs85d#a64';
    CONST VIEW_PATH = '../../lindeiro_app/view/';

    const ERROR_CONTROLLER = 'NotFoundController';
    const DEFAULT_ACTION = 'index';
}