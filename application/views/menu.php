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