<?php

class MY_Controller extends CI_Controller {
    public function __construct(){
        parent::__construct();
    }

    protected function json_post (){
        if($_SERVER['REQUEST_METHOD']==='POST' && empty($_POST)) {
            $_POST = json_decode(file_get_contents('php://input'), true);
        }
    }

    protected function validate_session(){
        if($this->session->has_userdata('user_name')){
            return true;
        }else{
            return false;
        }
    }

    public function logout(){
        $this->session->sess_destroy();
    }
}