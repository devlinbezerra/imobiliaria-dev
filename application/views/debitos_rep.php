
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
                <h2 class="font-light m-b-xs">
                    Relatório de Débitos
                </h2>
                <small>Aqui você pode filtrar a lista de débitos para acompanhar os pagamentos de seus 
                inquelinos.
                </small>
            </div>
        </div>
    </div>


<div class="content animate-panel">

    <div class="row">
        <div class="col-lg-12">
            <div class="hpanel">
                <div class="panel-heading">
                    <div class="panel-tools">
                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        <a class="closebox"><i class="fa fa-times"></i></a>
                    </div>
                    Filtro da Pesquisa
                </div>
                <div class="panel-body">
                    <form>
                        <div class='col-sm-4'>
                            <label>Imóvel</label>
                            <select id='i.id' class='form-control relatorio-debitos'>
                                <option value='0'>Selecionar</option>
                            </select>
                        </div>
                        <div class='col-sm-4'>
                            <label>Inquelino</label>
                            <select id='pe.id' class='form-control relatorio-debitos'>
                                <option value='0'>Selecionar</option>
                            </select>
                        </div>
                        <div class='col-sm-4'>
                            <label>Cliente</label>
                            <select id='po.id' class='form-control relatorio-debitos'>
                                <option value='0'>Selecionar</option>
                            </select>
                        </div>
                        <div class='col-sm-4'>
                            <label>Vencimento</label>
                            <input id='d.vencimento' type='date' class='form-control relatorio-debitos'/>
                        </div>
                        <div class='row'>
                            
                        </div>
                    </form>
                </div>
                <div class='panel-footer'>
                    <div class='btn-group'>
                        <button class='btn btn-default'>Limpar</button>
                        <button id='botao_bucar_debitos' class='btn btn-primary'>Buscar</button>
                    </div>
                </div>
            </div>

            <div class="hpanel">
                <div class="panel-heading">
                    <div class="panel-tools">
                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        <a class="closebox"><i class="fa fa-times"></i></a>
                    </div>
                    Lista de Débitos
                </div>
                <div class="panel-body">
                <table id="relatorio_debitos" class="table table-striped table-bordered table-hover table-debitos">
                <thead>
                <tr>
                    <th>Inquelino</th>
                    <th>Imóvel</th>
                    <th>Dias em atraso</th>
                    <th>Vencimento</th>
                    <th>Valor Nominal</th>
                    <!-- <th>Valor Corrigido</th> -->
                    <th>Status</th>
                    <th>Ação</th>
                    <th></th>
                </tr>
                </thead>
                <tbody class='list'>
                </tbody>
                </table>
                <input type='hidden' id='modulo' value='debitos_rep' />
                <input type='hidden' id='modulo_list' value='debitos_rep' />

                </div>
            </div>
        </div>

    </div>
</div>


<script>
    // $(function () {
    //     // Initialize Example 2
    //     // $('#example2').dataTable();
    // });
</script>