<?php
class Model_contratos extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('imovel','contratante','contratado');
        $this->exclusive_fields = array('imovel');
        $this->table = 'contratos';
    }
}