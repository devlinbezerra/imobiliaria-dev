<?php
class Model_imoveis extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('descricao','proprietario');
        $this->exclusive_fields = array('matricula');
        $this->table = 'imoveis';
    }
}