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
            <li class='cadastro'>
                <a href="#"><span class="nav-label">Cadastro</span><span class="fa arrow"></span> </a>
                <ul id='lista_cadastro' class="nav nav-second-level">
                        <li class='clientes'><a href="<?php echo base_url(); ?>producao/clientes">Proprietários</a></li>
                        <li class='imoveis'><a href="<?php echo base_url(); ?>producao/imoveis">Imóveis</a></li>
                        <li class='inquelinos'><a href="<?php echo base_url(); ?>producao/inquelinos">Inquelinos</a></li>
                        <li class='contratos'><a href="<?php echo base_url(); ?>producao/contratos">Contratos</a></li>
                        <li class='debitos'><a href="<?php echo base_url(); ?>producao/debitos">Débitos</a></li>        
                </ul>
            </li>
            <li class='relatorios'>
                <a href="#"><span class="nav-label">Relatórios</span><span class="fa arrow"></span> </a>
                <ul id='lista_relatorios' class="nav nav-second-level">
                    <li class='relatorio_debitos' ><a href="report_debitos.html">Débitos</a></li>
                </ul>
            </li>
        </ul>
    </div>
</aside>