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
    public function listar($tabela){
        $vs = parent::validate_session();
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            if(sizeof($_POST)){
                $dados = $this->$model->list($_POST);
            }else{
                $dados = $this->$model->list();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
    }

    public function get($tabela){
        $vs = parent::validate_session();
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            $dados = $this->$model->get($_POST);
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

    //Relatórios
    public function relatorio($tabela){
        $vs = parent::validate_session();
        // $vs = true;
        parent::json_post();
        if($vs){
            $model = 'Model_'.$tabela;
            $this->load->model($model);
            if(sizeof($_POST)){
                $dados = $this->$model->report($_POST);
            }else{
                $dados = $this->$model->report();
            }
        }else{
            $status = array(
                'status' => false,
                'message' => 'Sessão expirou, por favor faça login novamente'
            );
            echo json_encode($status);
        }
    }
    
}