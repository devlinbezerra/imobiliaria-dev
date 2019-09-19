<?php
class Model_imoveis extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('descricao','proprietario');
        $this->exclusive_fields = array('matricula');
        $this->table = 'imoveis';
    }

    public function list($where = 'imoveis.id > 0'){
        $this->db->select('imoveis.* , pessoa.nome as proprietario_nome');
        $this->db->from($this->table);
        $this->db->join('pessoa','imoveis.proprietario = pessoa.id');
        $this->db->where($where);
        $res = $this->db->get()->result();
        if(sizeof($res) > 0){
            $data = array (
                'status' => true,
                'message' => 'A busca resultou em '.sizeof($res).' ocorrêcia(s).',
                'result' => $res
            );
        }else{
            $data = array (
                'status' => false,
                'message' => 'Não há resultados para essa busca.'
            );
        }
        echo json_encode($data);
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