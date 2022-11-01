<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\User;
use src\Models\Requisitor;
use src\Models\Entity\Document;

class DocumentController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade document, aqui será armazenados os documentos dos lindeiros, essa rota somente pode ser acessada pelo administrador com excessão do get.";

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
            $doc = new Document();

            $dataAdd['extension'] = addslashes((isset($data["extension"])) ? $data["extension"] : "");
            $dataAdd['path'] = addslashes((isset($data["path"])) ? $data["path"] : "");
            $dataAdd['demands_id'] = addslashes((isset($data["demands_id"])) ? $data["demands_id"] : "");

            $result = $doc->add($dataAdd);

            if ($result['isValid']) {
                $return['data'] = "success";
                $return["isValid"] = true;
            } else {
                $return['error'] = $result['error'];
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $doc = new Document();
        $doc = $doc->getAll(true);
        $return = ["data" => $doc];


        $this->returnJson($return);
    }
}
