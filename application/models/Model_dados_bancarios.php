<?php
class Model_dados_bancarios extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('banco','agencia','conta','cpf_titular','cliente');
        $this->exclusive_fields = array();
        $this->table = 'dados_bancarios';
    }
}