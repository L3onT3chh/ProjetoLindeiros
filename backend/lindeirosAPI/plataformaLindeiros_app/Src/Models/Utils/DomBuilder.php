<?php

namespace src\Models\Utils;

use DOMDocument;
use Exception;
use src\Models\Uuid;

class DomBuilder
{
    private $firstNode;
    private $obj;
    private $dom;
    private $parent;

    public function __construct($firstNode)
    {
        $this->firstNode = ucfirst($firstNode);

        $dom = new DOMDocument();
        $node = $dom->createElement($this->firstNode);
        $node = $dom->appendChild($node); 
        
        $this->parent = $node;
        $this->dom = $dom;
    }

    public function generate($data)
    {
        if(count($data) == 0){
            throw new Exception("Array data can not be empty, array struct must be build like this: name=>value");
        }

        $firstNode = $this->dom->createElement($this->firstNode);
        $firstNode = $this->dom->appendChild($firstNode);

        foreach($data as $tagName => $value){
            if(gettype($value) == "object"){
                $tag = $this->dom->importNode($value, true);
                $tag = $firstNode->appendChild($tag);
            }else if(gettype($value) == "array"){
                foreach($value as $subValue){
                    $tag = $this->dom->importNode($subValue, true);
                    $tag = $firstNode->appendChild($tag);
                }
            }else{
                $tag = $this->dom->createElement($tagName, $value);
                $tag = $firstNode->appendChild($tag);
            }
        }

        $this->parent->appendChild($firstNode);
        $this->obj = $firstNode;
    }

    public function buildObj(){
        $obj = json_encode(simplexml_load_string($this->dom->saveXML()));
        $obj = json_decode($obj, JSON_UNESCAPED_UNICODE);

        return $obj;
    }

    public function buildForeignObj($foreign){
        $obj = json_encode(simplexml_load_string($foreign->saveXML()));
        $obj = json_decode($obj, JSON_UNESCAPED_UNICODE);

        return $obj;
    }

    public function getStruct($noParent = false){
        if($noParent){
            $obj = $this->dom->importNode($this->obj, true);
            return $obj;
        }

        $obj = $this->dom->importNode($this->obj, true);
        $this->parent->appendChild($obj);
        return $this->parent;
    }
}
