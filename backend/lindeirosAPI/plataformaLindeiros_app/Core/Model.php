<?php

namespace core;

use PDO;
use core\Database;
use Exception;
use PDOException;

class Model
{

    /*parameters to use on the execute function*/
    const _ALL = 1;
    const _ONE = 2;
    /*parameters to use on the where function*/
    const _OR = "OR";
    const _AND = "AND";

    private $query;
    private $where = [];
    private $limit;
    private $orderby = "";
    private $groupby = "";
    private $binds = [];
    private $db;
    private $tableName;
    private $cond = [];
    private $role = "";
    private $needsQuery = false;

    public function __construct()
    {
        $this->_checkH();
    }

    public function _checkH()
    {
        if ($this->db == null) {
            $connection = Database::getInstance();
            try {
                $this->db = $connection;
                $this->tableName = $this->getTableName();
            } catch (PDOException $e) {
                return $e->getMessage();
            }
        }
    }

    public function getTableName()
    {
        $className = explode('\\', get_called_class());
        $className = end($className);
        return 'tb_' . strtolower($className);
    }

    /*
        * - For to select all (must be past as an array ex: select([*]))
        OR
        fields name (same as declared on database)

        Inputs for join fields
            sintaxe: ["firstTableID"=>"joinType|foreignTable.field|foreignField as alias"]

    */
    public function _select($fieldsOrigin, $fieldsJoin = [], $useAlias = true)
    {

        $this->role = "select";

        if (count($fieldsJoin) > 0) {
            $inners = [];
            $joinFields = [];
            $pattern = "/^([A-z0-9 ]{1,})\|([A-z0-9.]{1,})\|([A-z0-9, ]{1,})$/";
            foreach ($fieldsJoin as $ifield => $ivalue) {
                if (preg_match($pattern, $ivalue)) {
                    $str = explode("|", $ivalue);
                    $innerTable = explode(".", $str[1]);
                    $initialTable = $this->getTableName() . "." . $ifield;
                    $inners[] = strtoupper($str[0]) . " " . $innerTable[0] . " ON " . $str[1] . " = " . $initialTable;

                    $explicitField = explode(",", $str[2]);
                    $joinFields[$innerTable[0]] = $explicitField;
                    unset($fieldsJoin[$ifield]);
                }
            }
            $inners = implode(" ", $inners);
        }

        $tableName = $this->getTableName();
        $fieldString = ($useAlias) ? $tableName . "." . implode(", $tableName.", $fieldsOrigin) : implode(",", $fieldsOrigin);
        $finalInner = (isset($inners)) ? " " . $inners : "";
        $finalJoinFields = "";

        if (isset($joinFields)) {
            $i = 1;
            $finalJoinFields = ", ";
            foreach ($joinFields as $tableName => $value) {
                foreach ($value as $singleField) {
                    $singleField = str_replace("as ", "as \"", $singleField);

                    if ($i == count($joinFields)) {
                        $finalJoinFields .= $tableName . "." . $singleField . "\"";
                    } else {
                        $finalJoinFields .= $tableName . "." . $singleField . "\"" . ", ";
                    }
                    $i += 1;
                }
            }
        }

        $this->query = "SELECT $fieldString $finalJoinFields FROM " . $this->tableName . $finalInner;

        return $this;
    }

    public function _insert($fields = [])
    {

        $this->role = "insert";

        $field = implode(",", array_keys($fields));
        $fieldDotted = implode(",:", array_keys($fields));

        $this->query = "INSERT INTO " . $this->tableName . " (" . $field . ") VALUES(:" . $fieldDotted . ")";

        $this->binds = $fields;

        return $this;
    }

    public function _update($fields = [])
    {

        $this->role = "update";

        $this->query = "UPDATE " . $this->tableName . " SET ";
        $this->binds = $fields;

        $sets = "";
        $i = 1;
        foreach ($fields as $ifield => $ivalue) {
            if (count($fields) == $i) {
                $sets .= $ifield . " = :" . $ifield;
            } else {
                $sets .= $ifield . " = :" . $ifield . ", ";
            }
            $i += 1;
        }

        $this->query .= $sets;

        return $this;
    }

    public function _delete()
    {

        $this->role = "delete";

        $this->query = "DELETE FROM " . $this->tableName;

        return $this;
    }

    /*
        - where parameters must be like the following example:
            where("fiedl", "sqlCond", "value"])
        - also the index has to be same as database field name
    */
    public function _where($field, $cond, $value)
    {

        $prefix = $this->getTableName().".";
        if ($cond == "in") {
            $this->needsQuery = true;
            $this->where[] = $prefix.$field . " " . strtoupper($cond) . "(" . $value . ")";
        } else if ($cond == "like") {
            $this->needsQuery = true;
            $this->where[] = $prefix.$field . " " . strtoupper($cond) . " '" . $value . "'";
        } else {
            $this->where[] = $prefix.$field . " " . strtoupper($cond) . " :" . $field;
        }

        $this->binds[$field] = addslashes($value);

        return $this;
    }

    public function _cond($value)
    {
        $this->cond[] = strtoupper($value);

        return $this;
    }

    public function _between($field, $from, $to)
    {
        $this->where[] = $field . " BETWEEN " . $from . " AND " . $to;

        return $this;
    }

    public function _limit($qtd, $offset)
    {
        $this->limit = "LIMIT " . $offset . ", " . $qtd;

        return $this;
    }

    public function _orderBy($field, $type = "ASC")
    {
        $this->orderby .= " ORDER BY " . $field . " " . $type;

        return $this;
    }

    public function _groupBy($field)
    {
        $this->groupby .= " GROUP BY " . $field;

        return $this;
    }

    public function whereVerify()
    {
        if (($this->role == "delete" || $this->role == "update") && count($this->where) == 0) {
            throw new Exception("Delete and Update statements requires to pass id using where");
        }

        if (count($this->where) > 1) {
            if(count($this->where) != (count($this->cond) + 1)){
                throw new Exception("Numbers of wheres and operators not matching");
            }
        }
    }

    /*
        mode value can assume both ALL = 1, ONE = 2
        its recommended to use one of the constant not the number directly
    */
    public function _execute($mode = 1)
    {
        $final = array();

        $sql = $this->query;

        if ($this->role != "insert") {
            $this->whereVerify();
            if (count($this->where) > 0) {
                $sql .= " WHERE ";
                foreach ($this->where as $i => $whereItem) {
                    if (count($this->where) > 1) {
                        $sql .= $whereItem . " " . $this->cond[$i] . " ";
                    } else {
                        $sql .= $whereItem;
                    }
                }
            }

            $sql .= " " . $this->orderby;
            $sql .= " " . $this->limit;
        }

        if(!empty($this->groupby)){
            $sql .= " ".$this->groupby;
        }

        if (count($this->binds) > 0 && $this->needsQuery == false) {

            $data = $this->db->prepare($sql);
            
            foreach ($this->binds as $field => $value) {
                $data->bindValue(":$field", $value);
            }

            try {
                $data->execute();
            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }
        } else {
            $data = $this->db->query($sql);
        }

        if ($this->role == "select") {
            if ($data->rowCount() > 0) {
                if ($mode == 1) {
                    $final = $data->fetchAll(PDO::FETCH_ASSOC);
                } else if ($mode == 2) {
                    $final = $data->fetch(PDO::FETCH_ASSOC);
                }
            }
        }

        $this->clean();
        return $final;
    }

    public function _rowCount()
    {
        return count($this->_execute());
    }

    public function clean()
    {
        $this->query = "";
        $this->orderby = "";
        $this->role = "";
        $this->needsQuery = false;
        $this->limit = "";
        $this->cond = [];
        $this->where = [];
        $this->binds = [];
    }
}
