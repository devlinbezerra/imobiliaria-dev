<?php 

class MY_Model extends CI_Model {

    //Não permitir inserir sem os dados obrigatórios
    private function required_fields($data){
        $status = true;
        foreach($this->required_fields as $resp){
            if(!array_key_exists($resp, $data)){
                $status = false;
                break;
            }elseif($data[$resp] === ''){
                $status = false;
                break;
            }
        }
        return $status;
    }

    //Não permitir duplicidade de acordo com os campos exclusivos
    private function check_exclusive_fields($data){
        $status = true;
        $keys = array_keys($data);
        
        //1. Verificar se na tabela tem campos exclusivos
        if(sizeof($this->exclusive_fields)){
            
            //2. Retirar elementos que não tem exclusividade

            for($i = 0; $i < sizeof($keys); $i++){
                if(!in_array($keys[$i], $this->exclusive_fields)){
                    unset($data[$keys[$i]]);
                }
            }

            //3. Verificar se tem algum registro como valor idêntico aos campos exclusivos
            foreach($this->exclusive_fields as $r){
                if(isset($data[$r])){
                    if($this->db->get_where($this->table, $r." = '".$data[$r]."'")->result()){
                        $status = false;
                        break;
                    }
                }
            }
        }
        return $status;
    }

    protected function validate_action($data){
        if($this->required_fields($data)){
            if($this->check_exclusive_fields($data)){
                return true;
            }else{
                $status = array(
                    'status' => false, 
                    'message' => 'Já existe um registro com os dados informados!'
                );
                throw new Exception (json_encode($status));
            }
        }else{
            $status = array(
                'status' => false, 
                'message' => 'Erro: Alguns campos obrigatórios não foram encontrados!'
            );
            throw new Exception (json_encode($status));
        } 
    }

    public function insert($data){
        try{
            $this->validate_action($data);
            $this->db->insert($this->table,$data);
            $result = array(
                'status' => true,
                'id' => $this->db->insert_id(),
                'message' => 'Registro incluído com sucesso!'
            );
            echo json_encode($result);
        }catch(Exception $e){
            echo $e->getMessage();
        }   
    }

    public function get($data){
        try{
            $res = $this->db->get_where($this->table,$data);
            return $res->result();
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    public function update($data){
        if($this->check_exclusive_fields($data)){
            $pk = $this->primary_key;
            $this->db->where($pk,$data[$pk]);
            $this->db->update($this->table,$data);
            $status = array(
                'status' => true,
                'message' => 'Alterado com sucesso!'
            );
        }else{
            $status = array(
                'status' => false,
                'message' => 'Erro: Existem dados já registrados em banco.'
            );
        }
        echo json_encode($status);
    }

    public function delete($data){
        try{
            $pk = $this->primary_key;
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