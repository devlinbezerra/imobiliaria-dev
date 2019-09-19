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
						<li><a href="<?php echo base_url(); ?>producao/imoveis">Lista</a></li>
						<li class="active">
							<span>Cadastro</span>
						</li>
					</ol>
				</div>
				<h2 class="font-light m-b-xs">
					Cadastro de Imóveis
				</h2>
				<small>Formulário para Cadastro de Imóveis</small>
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
								<label>Número da Matrícula</label>
								<input
									id='matricula'
									type="text"
									class="form-control campo_imovel"
									placeholder="Informe a matrícula"
								/>
							</div>
							<div class="col-sm-4">
								<label>Descrição</label>
								<input
									id='descricao'
									type="text"
									class="form-control campo_imovel"
									placeholder="Ex.: Casa do Centro"
								/>
							</div>
							<div class="col-sm-4">
								<label>Rua</label>
								<input
									id='rua'
									type="text"
									class="form-control campo_imovel"
									placeholder="Rua, Av., Etc."
								/>
							</div>
							<div class="col-sm-4">
								<label>Complemento</label>
								<input
									id='complemento'
									type="text"
									class="form-control campo_imovel"
									placeholder="Quadra, Lote, Apto, etc"
								/>
							</div>
							<div class="col-sm-4">
								<label>Bairro</label>
								<input
									id='bairro'
									type="text"
									class="form-control campo_imovel"
									placeholder="Informe o nome do bairro"
								/>
							</div>
							<div class="col-sm-4">
								<label>Cidade</label>
								<input
									id='cidade'
									type="text"
									class="form-control campo_imovel"
									placeholder="Cuiabá, Rondonópolis, etc"
								/>
							</div>
							<div class="col-sm-4">
								<label>Estado</label>
								<input
									id='estado'
									type="text"
									class="form-control campo_imovel"
									placeholder="Ex.: MT, Mato Grosso"
								/>
							</div>
							<div class="col-sm-4">
								<label>CEP</label>
								<input
									id='cep'
									type="text"
									class="form-control campo_imovel"
									placeholder="78000-000"
								/>
							</div>
							<div class="col-sm-4">
								<label>Proprietário</label>
								<select id='proprietario' class="form-control campo_imovel">
									<option value='143'>Rafael</option>
									<option>Antônio</option>
									<option>Carlinhos</option>
									<option>Vanderlei</option>
								</select>
							</div>
							<div class="col-sm-8">
								<label>Anotações</label>
								<input
									id='anotacao'
									type="textarea"
									class="form-control campo_imovel"
									placeholder="Coloque suas anotações aqui."
								/>
							</div>
						</form>
					</div>
					<div class="panel-footer">
						<div class="btn-group botoes">
							<!-- <button class="btn btn-default">Cancelar</button>
							<button class="btn btn-primary">Salvar</button> -->
						</div>
					</div>
					<input type='hidden' id='modulo' value='imoveis' />
					<input type='hidden' id='pk' value='<?php echo $id;?>'/>
				</div>
			</div>
		</div>
	</div>
</div>
