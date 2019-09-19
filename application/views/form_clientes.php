<!-- Main Wrapper -->
<div id="wrapper">

<!-- Início do formulário-->

    <div class="normalheader transition animated fadeIn">
        <div class="hpanel">
            <div class="panel-body">
                <a class="small-header-action" href="#">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>

                <div id="hbreadcrumb" class="pull-right m-t-lg">
                    <ol class="hbreadcrumb breadcrumb">
                        <li><a href="<?php echo base_url(); ?>producao/clientes">Lista</a></li>
                        <li class='active'>
                            <span>Cadastro</span>
                        </li>
                        
                    </ol>
                </div>
                <h2 class="font-light m-b-xs">
                    Cadastro de Clientes
                </h2>
                <small>Formulário para Cadastro de Clientes</small>
            </div>
        </div>
    </div>


<div class="content animate-panel">

    <div class="row">
        <div class="col-lg-12">
            <div class="hpanel">
                <div class="panel-heading"></div>
                <div class="panel-body">
                    <form method="post" >
                        <div class="col-sm-4">
                            <label>Nome Completo</label>
                            <input type='text' id='nome' class='form-control campo' placeholder="Informe o nome completo" />
                        </div>
                        <div class="col-sm-4">
                            <label>CPF</label>
                            <input type='text' id='cpf' class='form-control campo' placeholder="999.999.999-99" />
                        </div>
                        <div class="col-sm-4">
                            <label>RG</label>
                            <input type='text' id='rg' class='form-control campo' placeholder="Ex.: 150244-4 SSP/MT" />
                        </div>
                        <div class="col-sm-4">
                            <label>Data de Nascimento</label>
                            <input type='date' id='data_nascimento' class='form-control campo' />
                        </div>
                        <div class="col-sm-4">
                            <label>Rua</label>
                            <input type='text' id='rua' class='form-control campo' placeholder="Rua, Av., Etc." />
                        </div>
                        <div class="col-sm-4">
                            <label>Complemento</label>
                            <input type='text' id='complemento' class='form-control campo' placeholder="Quadra, Lote, Apto, etc" />
                        </div>
                        <div class="col-sm-4">
                            <label>Bairro</label>
                            <input type='text' id='bairro' class='form-control campo' placeholder="Informe o nome do bairro" />
                        </div>
                        <div class="col-sm-4">
                            <label>Cidade</label>
                            <input type='text' id='cidade' class='form-control campo' placeholder="Cuiabá, Rondonópolis, etc" />
                        </div>
                        <div class="col-sm-4">
                            <label>Estado</label>
                            <input type='text' id='estado' class='form-control campo' placeholder="Ex.: MT, Mato Grosso" />
                        </div>
                        <div class="col-sm-4">
                            <label>CEP</label>
                            <input type='text' id='cep' class='form-control campo' placeholder="78000-000" />
                        </div>
                        <div class="col-sm-4">
                            <label>Telefone Comercial</label>
                            <input type='text' id='telefone_comercial' class='form-control campo' placeholder="(00) 00000-0000" />
                        </div>
                        <div class="col-sm-4">
                            <label>Telefone Residencial</label>
                            <input type='text' id='telefone_residencial' class='form-control campo' placeholder="(00) 00000-0000" />
                        </div>
                        <div class="col-sm-4">
                                <label>Profissão</label>
                                <input type='text' id='profissao' class='form-control campo' placeholder="Infomar a profissão" />
                        </div>
                        <div class="col-sm-4">
                                <label>Renda</label>
                                <input type='text' id='renda' class='form-control campo' placeholder="Infomar a renda" />
                        </div>
                        <div class="col-sm-4">
                            <label>Estado Civil</label>
                            <select id='estado_civil' class='form-control campo campo_conjuge'>
                                <option>Solteiro(a)</option>
                                <option>Casado(a)</option>
                                <option>Viúvo(a)</option>
                                <option>Divorciado(a)</option>
                            </select>
                        </div>
                        <div class='col-sm-12 collapse' id='conjuge'>

                                    <h4>Dados do Cônjuge</h4>
                                    <div class="col-sm-4">
                                        <label>Nome Completo</label>
                                        <input type='text' id='nome' class='form-control campo_conjuge' placeholder="Informe o nome completo" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>CPF</label>
                                        <input type='text' id='cpf' class='form-control campo_conjuge' placeholder="999.999.999-99" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>RG</label>
                                        <input type='text' id='rg' class='form-control campo_conjuge' placeholder="Ex.: 150244-4 SSP/MT" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Data de Nascimento</label>
                                        <input type='date' id='data_nascimento' class='form-control campo_conjuge' />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Telefone </label>
                                        <input type='text' id='telefone_comercial' class='form-control campo_conjuge' placeholder="(00) 00000-0000" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Profissão</label>
                                        <input type='text' id='profissao' class='form-control campo_conjuge' placeholder="Infomar a profissão" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Renda</label>
                                        <input type='text' id='renda' class='form-control campo_conjuge' placeholder="Infomar a renda" />
                                    </div>
                        </div><!-- dados Conjuge-->
                        <div class="col-sm-12">
                            <label>Anotações</label>
                            <input type='textarea' id='anotacao' class='form-control  campo' placeholder="Coloque suas anotações aqui." />
                        </div>
                        <input type='hidden' id='modulo' value='clientes' />
                        <input type='hidden' id='tipo' class='campo' value='cliente'/>
                        <input type='hidden' id='tipo' class='campo_conjuge' value='conjuge'/>
                        <input type='hidden' id='pk' value='<?php echo $id;?>'/>
                        

                    </form>
                </div><!-- panel body -->
                <div class='panel-footer'>
                    <div class='btn-group botoes'>
                        <!--<button class='btn btn-default'><a href='<?php //echo base_url();?>producao/form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button>
                        <button id='cadastrar_banco' data-toggle='modal' data-target='#modal_dados_bancarios'class='btn btn-info' disabled>Dados Bancários</button>
                        <button id='form_clientes_salvar' class='btn btn-primary'>Salvar</button>-->
                    </div>
                </div>
            </div><!-- hpanel-->
        </div><!-- col 12-->
    </div><!-- row -->
</div><!-- content-->