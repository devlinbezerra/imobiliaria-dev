<?php
class Model_contratos extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('imovel','contratante','contratado');
        $this->exclusive_fields = array('imovel');
        $this->table = 'contratos';
    }

    public function update($data){
        $pk = $this->primary_key;
        $this->db->where($pk,$data[$pk]);
        $this->db->update($this->table,$data);
        $status = array(
            'status' => true,
            'message' => 'Alterado com sucesso!'
        );
        
        echo json_encode($status);
    }
}