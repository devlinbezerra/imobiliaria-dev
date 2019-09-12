<?php

class Api extends MY_Controller { 
    //CRUD

    //1. Create
    public function inserir($tabela){
        $vs = parent::validate_session();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            parent::json_post();
            try{
                $this->$model->insert($_POST);
            }catch(Exception $e){
                echo $e->getMessage();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
        
    }

    //2. Read
    public function get($tabela){
        $vs = parent::validate_session();
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            try{
               echo json_encode($this->$model->get($_POST)[0]);
            }catch(Exception $e){
                echo $e->getMessage();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
    }

    //3. Update
    public function update($tabela){
        $vs = parent::validate_session();
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            try{
                $this->$model->update($_POST);
            }catch(Exception $e){
                echo $e->getMessage();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
    }

    //4. Delete
    public function delete($tabela){
        $vs = parent::validate_session();
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            try{
                $this->$model->delete($_POST);
            }catch(Exception $e){
                echo $e->getMessage();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
    }

    //Authentication
    public function autenticar(){
        parent::json_post();
        $this->load->model('Model_usuario');
        if($this->Model_usuario->authenticate($_POST)){
            $this->session->set_userdata('user_name',$_POST['user_name']);
            echo 'true';
        }else{
            parent::logout();
            echo 'false';
        }
    }

    public function testar_session(){
        parent::json_post();
        if(parent::validate_session()){
            return print_r($_SESSION);
        }else{
            echo 'Sem sessão';
        }
    }

    public function testjs (){
        parent::json_post();
        $test = array('nome'=>'devlin','esposa'=>'karoline','filhas'=> array('nome'=>'Rebeca','idade'=>21));
        $res = json_encode($test);
        echo $res;
    }

    //Relatórios

    
}