<?php
class Model_contratos extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('imovel','contratante','contratado','inicio','termino');
        $this->exclusive_fields = array('imovel');
        $this->table = 'contratos';
    }

    public function list($where = 'c.id > 0'){
        $this->db->select('c.* , i.descricao as imovel_descricao, p.nome as contratante_nome, e.nome as contratado_nome');
        $this->db->from($this->table.' as c');
        $this->db->join('imoveis i','c.imovel = i.id');
        $this->db->join('pessoa p','c.contratante = p.id');
        $this->db->join('pessoa e','c.contratado = e.id');
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