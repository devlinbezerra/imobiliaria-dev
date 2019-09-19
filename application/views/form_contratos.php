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
						<li><a href="<?php echo base_url(); ?>producao/contratos">Lista</a></li>
						<li class="active">
							<span>Cadastro</span>
						</li>
					</ol>
				</div>
				<h2 class="font-light m-b-xs">
					Cadastro de Contratos
				</h2>
				<small>Formulário para Cadastro de Contratos. <strong>Atenção:</strong> Não pode haver
				mais que um contrato para o mesmo imóvel.</small>
			</div>
		</div>
	</div>

	<div class="content animate-panel">
		<div class="row">
			<div class="col-lg-12">
				<div class="hpanel">
					<div class="panel-heading"></div>
					<div class="panel-body">
						<form method="post">
							<div class="col-sm-4">
								<label>Número do Contrato</label>
								<input
									id='numero_contrato'
									type="text"
									class="form-control campo_contrato"
									placeholder="Informe o número do contrato"
								/>
							</div>
							<div class="col-sm-4">
								<label>Imóvel</label>
								<select id='imovel' class="form-control campo_contrato"></select>
							</div>
							<div class="col-sm-4">
								<label>Contratante</label>
								<select id='contratante'  class="form-control campo_contrato"></select>
							</div>
							<div class="col-sm-4">
								<label>Contratado</label>
								<select id='contratado' class="form-control campo_contrato"></select>
							</div>
							<div class="col-sm-4">
								<label>Data Inicial</label>
								<input type="date" class="form-control campo_contrato" id="inicio" />
							</div>
							<div class="col-sm-4">
								<label>Data final</label>
								<input type="date" class="form-control  campo_contrato" id="termino" />
							</div>
							<div class="col-sm-4">
								<label>Link para Google Drive</label>
								<input type="Link" class="form-control campo_contrato" id="link" />
								<spam>
									<i>
										<strong>Atenção:</strong>Você deve compartilhar o arquivo
										no Google Drive.
									</i>
								</spam>
							</div>
						</form>
					</div>
					<div class="panel-footer">
						<div class="btn-group botoes">
							<!-- <button class="btn btn-default">Cancelar</button>
							<button class="btn btn-primary">Salvar</button> -->
						</div>
					</div>
					<input type='hidden' id='modulo' value='contratos' />
					<input type='hidden' id='pk' value='<?php echo $id;?>'/>
				</div>
			</div>
		</div>
	</div>
</div>
