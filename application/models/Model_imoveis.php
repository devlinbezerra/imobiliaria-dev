<?php
class Model_imoveis extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('descricao','proprietario');
        $this->exclusive_fields = array('matricula');
        $this->table = 'imoveis';
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