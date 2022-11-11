<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\User;
use src\Models\Requisitor;
use src\Models\Entity\News;
use src\Models\Uuid;

class NewsController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade news, utilizando esse objeto será possivel acessar as notícias assim como a modificação e exclusão do mesmo com acesso administrativo.";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function create()
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $dataAdd = array();
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para criar notícias';
                $this->returnJson($return);
                exit;
            }

            $dataAdd['title'] = addslashes((isset($data["title"])) ? $data["title"] : "");
            $dataAdd['body'] = addslashes((isset($data["body"])) ? $data["body"] : "");
            $dataAdd['city_id'] = addslashes((isset($data["city_id"])) ? $data["city_id"] : "");
            $dataAdd['axes_id'] = addslashes((isset($data["axes_id"])) ? $data["axes_id"] : "");

            $new = new News();
            $new = $new->add($dataAdd);

            if (!$new["isValid"]) {
                $return["error"] = $new["error"];
                $this->returnJson($return);
                exit;
            }

            $return["isValid"] = true;
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function single($params)
    {

        $return = array("error" => "", "isValid" => false);

        if (isset($params["title"])) {
            $title = addslashes($params["title"]);

            $new = new News();
            $new = $new->getOneByTitle($title);

            if (!$new["isValid"]) {
                $return["error"] = $new["error"];
                $this->returnJson($return);
                exit;
            }

            $return["data"] = $new["data"];
            $return["isValid"] = true;
        } else {
            $return["error"] = "Informe o titulo da noticia";
        }

        $this->returnJson($return);
    }

    public function all()
    {

        $return = array("error" => "", "isValid" => false);

        $new = new News();
        $new = $new->getAll();

        if (!$new["isValid"]) {
            $return["error"] = $new["error"];
            $this->returnJson($return);
            exit;
        }

        $return["data"] = $new["data"];
        $return["isValid"] = true;


        $this->returnJson($return);
    }
}
