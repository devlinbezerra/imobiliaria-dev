<?php

class Producao extends MY_Controller {
    public function index(){
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('login');
        $this->load->view('scripts');
    }

    public function clientes(){
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('clientes');
        $this->load->view('scripts');
    }

    public function form_clientes($id = 0){
        $data = array('id'=> $id);
        $this->load->helper('url');
        $this->load->view('headers');
        $this->load->view('toolbar');
        $this->load->view('menu');
        $this->load->view('form_clientes', $data);
        $this->load->view('footer');
        $this->load->view('modal_dados_bancarios');
        $this->load->view('modal_resultado');
        $this->load->view('scripts');
    }

    public function praticando() {
        $this->load->helper('url');
        $this->load->view('praticando');
    }
}