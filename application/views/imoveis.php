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
                        <li><a href="<?php echo base_url(); ?>producao/form_imoveis">Cadastro</a></li>
                    </ol>
                </div>

                <h2 class="font-light m-b-xs">
                    Imóveis
                </h2>
                <small>Lista de imóveis cadastrados</small>
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
                    <input type="text" class="form-control input-sm m-b-md" id="filter" placeholder="Search in table">
                    <table id="lista" class="footable table table-stripped toggle-arrow-tiny" data-page-size="8" data-filter=#filter>
                        <thead>
                        <tr>

                            <th data-toggle="true">Descrição</th>
                            <th>Rua</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th data-hide="all">Matrícula</th>
                            <th data-hide="all">Proprietário</th>
                            <th data-hide="all">Anotações</th>
                            <th data-hide="all">Ação</th>
                        </tr>
                        </thead>
                        <tbody class='list'>

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="5">
                                <ul class="pagination pull-right"></ul>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <input type='hidden' id='modulo' value='imoveis' />
                    <input type='hidden' id='modulo_list' value='imoveis' />


                </div>
            </div>
        </div>
    </div>
</div>