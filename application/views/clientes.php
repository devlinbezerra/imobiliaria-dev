<body>

<!-- Simple splash screen-->
<div class="splash"> <div class="color-line"></div><div class="splash-title"><h1>Home - SISTEMA DE GETÃO DE IMÓVEIS</h1><p>Fácil Imobiliária </p><img src="<?php echo base_url(); ?>assets/images/loading-bars.svg" width="64" height="64" /> </div> </div>
<!--[if lt IE 7]>
<p class="alert alert-danger">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Header -->
<div id="header">
    <div class="color-line">
    </div>
    <div id="logo" class="light-version">
        <span>
            Fácill Imobiliária
        </span>
    </div>
    <nav role="navigation">
        <div class="header-link hide-menu"><i class="fa fa-bars"></i></div>
        <div class="small-logo">
            <span class="text-primary">Fácill Imob. APP</span>
        </div>
        <div class="mobile-menu">
            <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
                <i class="fa fa-chevron-down"></i>
            </button>
            <div class="collapse mobile-navbar" id="mobile-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <a class="" href="index.html">Perfil</a>
                    </li>
                    <li>
                        <a class="" href="index.html">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-right">
            <ul class="nav navbar-nav no-borders">
                <li class="dropdown">
                    <a href="index.html">
                        <i class="pe-7s-upload pe-rotate-90"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>

<!-- Navigation -->
<aside id="menu">
    <div id="navigation">
        <div class="profile-picture">
            <a href="index.html">
                <img src="<?php echo base_url(); ?>assets/images/logo.png" width="143" height="149" class="img-circle m-b" alt="logo">
            </a>

            <div class="stats-label text-color">

                <div class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                        <small class="text-muted">Configurações <b class="caret"></b></small>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="">Perfil</a></li>
                        <li class="divider"></li>
                        <li><a href="index.html">Sair</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <ul class="nav" id="side-menu">
            <li class='active'>
                <a href="#"><span class="nav-label">Cadastro</span><span class="fa arrow"></span> </a>
                <ul class="nav nav-second-level">
                        <li class='active'><a href="clientes.html">Proprietários</a></li>
                        <li><a href="imoveis.html">Imóveis</a></li>
                        <li><a href="inquelinos.html">Inquelinos</a></li>
                        <li><a href="contratos.html">Contratos</a></li>
                        <li><a href="form_debitos.html">Débitos</a></li>        
                </ul>
            </li>
            <li>
                <a href="#"><span class="nav-label">Relatórios</span><span class="fa arrow"></span> </a>
                <ul class="nav nav-second-level">
                    <li><a href="report_debitos.html">Débitos</a></li>
                </ul>
            </li>
        </ul>
    </div>
</aside>

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
                        <li class='active'>
                            <span>Lista</span>
                        </li>
                        <li><a href="form_clientes.html">Cadastro</a></li>
                    </ol>
                </div>

                <h2 class="font-light m-b-xs">
                    Proprietários
                </h2>
                <small>Lista de proprietários cadastrados</small>
            </div>
        </div>
    </div>


<div class="content animate-panel">

    <div class="row">
        <div class="col-lg-12">
            <div class="hpanel">
                <div class="panel-heading">
                </div>
                <div class="panel-body">
                    <input type="text" class="form-control input-sm m-b-md" id="filter" placeholder="Buscar">
                    <table id="example1" class="footable table table-stripped toggle-arrow-tiny" data-page-size="8" data-filter=#filter>
                        <thead>
                        <tr>

                            <th data-toggle="true">Nome</th>
                            <th>Telefone</th>
                            <th>Cidade</th>
                            <th>Data Nascimento</th>
                            <th data-hide="all"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Devlin Ricardo da Silva Bezerra</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Alpha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Gamma project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Alpha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Betha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Gamma project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Alpha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Gamma project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Betha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Gamma project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Alpha project</td>
                            <td>65 98100-5873</td>
                            <td>Cuiabá</td>
                            <td>31/10/1984</td>
                            <td>
                                <div class='btn-group'>
                                    <button class='btn btn-warning'>Aleterar</button>
                                    <button class='btn btn-danger'>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="5">
                                <ul class="pagination pull-right"></ul>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>





<!--Fim do Formulário-->

    <!-- Footer-->
    <footer class="footer">
        <span class="pull-right">
            15/08/2019
        </span>
        Facill Imobiliária 2019 Versão 1.0
    </footer>

</div>

</body>