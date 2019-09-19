<?php
class Model_debitos extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->required_fields = array('vencimento','contrato','tipo','valor');
        $this->exclusive_fields = array();
        $this->table = 'debitos';
    }

    public function list($where = 'd.id > 0'){
        $this->db->select('d.*, i.descricao as imovel, c.numero_contrato, p.nome as contratante ');
        $this->db->from($this->table.' as d');
        $this->db->join('contratos c','d.contrato = c.id');
        $this->db->join('imoveis i','c.imovel = i.id');
        $this->db->join('pessoa p','c.contratante = p.id');
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
}