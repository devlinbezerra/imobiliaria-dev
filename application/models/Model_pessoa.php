<?php
class Model_pessoa extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('nome','tipo');
        $this->exclusive_fields = array('cpf','rg');
        $this->table = 'pessoa';
    }
}