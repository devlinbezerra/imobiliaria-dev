<?php
class Model_dados_bancarios extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->secondary_key = 'cliente';
        $this->required_fields = array('banco','agencia','conta','cpf_titular','cliente');
        $this->exclusive_fields = array();
        $this->table = 'dados_bancarios';
    }

    public function delete($data){
        $pk = $this->primary_key;
        if(!isset($data[$pk])){
          $pk = $this->secondary_key;  
        }
        try{
            
            $this->db->where($pk,$data[$pk]);
            $this->db->delete($this->table);
            $status = array(
                'status' => true,
                'message' => 'Registro excluído!'
            );
            echo json_encode($status);
        }catch(Exception $e){
            $status = array(
                'status' => false,
                'message' => $e->getMessage()
            );
            echo $status;
        } 
    }    
}