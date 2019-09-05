<?php
class Model_usuario extends MY_Model {
    public function __construct(){
        $this->primary_key = 'id';
        $this->password = 'pwd';
        $this->required_fields = array('user_name','pwd');
        $this->exclusive_fields = array('user_name');
        $this->table = 'usuario';
    }

    public function insert($data){
        $data[$this->password] = password_hash($data[$this->password], PASSWORD_DEFAULT);
        try{
            parent::validate_action($data);
            $this->db->insert($this->table,$data);
            echo 'Registrado com sucesso!';
        }catch(Exception $e){
            echo $e->getMessage();
        }   
    }

    public function authenticate($data){
        try{
            $pwd_post = $data[$this->password];
            unset($data[$this->password]);
            $res = parent::get($data);
            if(isset($res[0]->pwd) && password_verify($pwd_post, $res[0]->pwd)){
                return true;
            }else{
                return false;
            }
        }catch(Exception $e){
            echo $e->getMessage();
        }

    }
}