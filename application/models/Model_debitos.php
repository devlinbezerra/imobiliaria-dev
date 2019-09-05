<?php
class Model_debitos extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('vencimento','contrato','tipo','valor');
        $this->exclusive_fields = array();
        $this->table = 'debitos';
    }
}