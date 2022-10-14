<?php

namespace src\Models\Interfaces;

interface EntityInterface{
    /*
        function that have the option to search both a single data or All
        @data - an array that contains the data to create an new record
    */
    public function add($data);

    /*
        function that search for All data    
        @jsonFormat - indicates if you want the return to be a json obj(true) or a domDocument(false).
    */
    public function getAll($jsonFormat = true);

    /*
        function that have the option to search both a single data or All
        @id you need to pass the id of the item you want to get.
        
        @jsonFormat - indicates if you want the return to be a json obj(true) or a domDocument(false).
    */
    public function getOne($id, $jsonFormat = true);

    /*
        function that is responsible to edit a record
        @data - an array that contains all fields that will be changed

        @id - Id of the record you want to edit
    */
    public function edit($data, $id);

    /*
        function that is responsible to delete a record
        @id - Id of the record you want to delete
    */
    public function delete($id);

    /*
        function that verify if a record exist
        @id - Id of the record you want to check
    */
    public function exist($id);
}