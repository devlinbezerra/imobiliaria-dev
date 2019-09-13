<body class="blank">

<!-- Simple splash screen-->
<div class="splash"> 
    <div class="color-line"></div>
    <div class="splash-title">
        <h1>Sistema de Gestão de Imóveis</h1>
        <p>Facill Imobiliária</p>
        <img src="<?php echo base_url(); ?>assets/images/loading-bars.svg" width="64" height="64" /> 
    </div> 
</div>
<!--[if lt IE 7]>
<p class="alert alert-danger">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div class="color-line"></div>

<div class="login-container">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center m-b-md">
                <h3>SISTEMA DE GESTÃO DE IMÓVEIS</h3>
                <small>ENTRAR</small>
            </div>
            <div class="hpanel">
                <div class="panel-body">
                        <form action="" id="loginForm">
                            <div class="form-group">
                                <label class="control-label" for="username">Usuário</label>
                                <input type="text" placeholder="example@gmail.com" title="Por favor informe o seu nome de usuário" required="" value="" name="username" id="user_name" class="form-control">
                                <span class="help-block small">Informe o e-mail de usuário</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="password">Senha</label>
                                <input type="password" title="Por favor informe sua senha" placeholder="******" required="" value="" name="password" id="pwd" class="form-control">
                                <span class="help-block small">Informe sua senha</span>
                            </div>
                            
                        </form>
                        <button id='enviar' class="btn btn-success btn-block">Entrar</button>
                        <input type='hidden' id='modulo' value='login' />
                        <small><i class='message'></i></small>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">
            <strong>LOGIN</strong> - Desenvolvido por Devlin R. S. Bezerra (65) 98100-5873 <br/> 2019 Copyright Facill Imobiliaria
        </div>
    </div>
</div>




</body>