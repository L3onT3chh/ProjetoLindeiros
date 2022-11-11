<?php
session_start();

require '../../lindeiro_app/vendor/autoload.php';
require '../../lindeiro_app/Src/routes.php';
require '../../lindeiro_app/Core/Cors.php';

$router->run();
