<?php

class Producao extends MY_Controller {
    private $location = 'http://localhost/facil';

    public function index(){
        $this->session->sess_destroy();
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('login');
        $this->load->view('scripts');
    }

    public function clientes(){
        if(parent::validate_session()){
            $this->load->helper('url');
            $this->load->view('headers');
            $this->load->view('toolbar');
            $this->load->view('menu');
            $this->load->view('clientes');
            $this->load->view('footer');
            $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
        
    }
    
    public function inquelinos(){
        if(parent::validate_session()){
            $this->load->helper('url');
            $this->load->view('headers');
            $this->load->view('toolbar');
            $this->load->view('menu');
            $this->load->view('inquelinos');
            $this->load->view('footer');
            $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }
    
    public function imoveis(){
        if(parent::validate_session()){
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('imoveis');
        $this->load->view('footer');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }
    
    public function contratos(){
        if(parent::validate_session()){
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('contratos');
        $this->load->view('footer');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }
    
    public function debitos(){
        if(parent::validate_session()){
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('debitos');
        $this->load->view('footer');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }

    public function form_clientes($id = 0){
        if(parent::validate_session()){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_clientes', $data);
        $this->load->view('footer');
        $this->load->view('modal_dados_bancarios');
        $this->load->view('modal_resultado');
        $this->load->view('modal_confirm_delete');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }
    
    public function form_inquelinos($id = 0){
        if(parent::validate_session()){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_inquelinos', $data);
        $this->load->view('footer');
        $this->load->view('modal_resultado');
        $this->load->view('modal_confirm_delete');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }

    public function form_imoveis($id = 0){
        if(parent::validate_session()){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_imoveis', $data);
        $this->load->view('footer');
        $this->load->view('modal_resultado');
        $this->load->view('modal_confirm_delete');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }

    public function form_contratos($id = 0){
        if(parent::validate_session()){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_contratos', $data);
        $this->load->view('footer');
        $this->load->view('modal_resultado');
        $this->load->view('modal_confirm_delete');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }

    public function form_debitos($id = 0){
        if(parent::validate_session()){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_debitos', $data);
        $this->load->view('footer');
        $this->load->view('modal_resultado');
        $this->load->view('modal_confirm_delete');
        $this->load->view('scripts');
        }else{
            header('location:'.$this->location);
        }
    }
}