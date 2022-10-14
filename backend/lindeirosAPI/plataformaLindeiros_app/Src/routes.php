<?php
use core\Router;
use core\Description;

$router = new Router();

Router::get('/', 'HomeController@index');
Router::get('/doc/{control}', 'HomeController@doc');
Router::post('/authenticate', 'HomeController@authenticate');

//user
Router::post('/user', 'UserController@create', Description::userCreate());
Router::post('/login', 'UserController@login', Description::userLogin());
Router::get('/user', 'UserController@all', Description::userList());
Router::get('/user/{id}', 'UserController@single', Description::userSingle());
Router::put('/user/{id}', 'UserController@edit', Description::userEdit());
Router::delete('/user/{id}', 'UserController@delete', Description::userDelete());

//documents
Router::post('/document', 'DocumentController@create', Description::docCreate());
Router::get('/document', 'DocumentController@all', Description::docList());

//userType
Router::get('/userType', 'UserTypeController@all', Description::userTypeList());

//demands
Router::post('/demand', 'DemandaController@create', Description::demandaCreate());
Router::get('/demand/{id}', 'DemandaController@single', Description::demandaSingle());
Router::get('/demand', 'DemandaController@all', Description::demandaAll());
Router::put('/demand/{id}', 'DemandaController@edit', Description::demandaEdit());
Router::delete('/demand/{id}', 'DemandaController@delete', Description::demandaDelete());

//proposal
Router::post('/proposal', 'ProposalController@add', Description::proposalCreate());
Router::get('/proposal/{id}', 'ProposalController@getList', Description::proposalList());
Router::put('/proposal/{id}', 'ProposalController@edit', Description::proposalEdit());
Router::delete('/proposal/{id}', 'ProposalController@delete', Description::proposalDelete());

//News
Router::post('/news', 'NewsController@create', Description::newsCreate());
Router::get('/news/{title}', 'NewsController@single', Description::newsSingle());
Router::get('/news', 'NewsController@all', Description::newsList());

//City
Router::get('/city', 'CityController@all', Description::cityList());

//Axes
Router::get('/axes', 'AxesController@all', Description::AxesList());

//Statistics
Router::get('/statistics/demandByMonth', 'StatisticsController@demandByMonth', Description::StatisticsDemandByMonth());
Router::get('/statistics/demandByAxes', 'StatisticsController@demandByAxes', Description::StatisticsDemandByAxes());
Router::get('/statistics/demandByCity', 'StatisticsController@demandByCity', Description::StatisticsDemandByCity());
Router::get('/statistics/proposalQtd', 'StatisticsController@proposalQtd', Description::StatisticsProposalQtd());

//testes
Router::get('/teste', 'TesteController@index');


