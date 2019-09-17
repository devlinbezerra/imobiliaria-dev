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
				<h2 class="font-light m-b-xs">
					Inclusão de Débitos
				</h2>
				<small>Formulário para Inclusão de Débitos</small>
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
								<label>Data de Vencimento</label>
								<input id='vencimento' type="date" class="form-control campo_debitos" />
							</div>
							<div class="col-sm-4">
								<label>Contrato</label>
								<select id='contrato' class="form-control campo_debitos">
									<option value='1'>Contrato 11211</option>
									<option>Contrato 12544</option>
									<option>Contrato 36545</option>
									<option>Contrato 98111</option>
									<option>Contrato 98745</option>
									<option>Contrato 68414</option>
								</select>
							</div>
							<div class="col-sm-4">
								<label>Tipo</label>
								<select id='tipo' class="form-control campo_debitos">
									<option>Aluguel</option>
									<option>Energia</option>
									<option>Água</option>
									<option>Multa</option>
								</select>
							</div>
							<div class="col-sm-4">
								<label>Valor</label>
								<input
									id='valor'
									type="text"
									class="form-control campo_debitos"
									placeholder="Informe o valor"
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
					<input type='hidden' class='campo_debitos' id='status' value='aberto' />
					<input type='hidden' id='modulo' value='debitos' />
					<input type='hidden' id='pk' value='<?php echo $id;?>'/>
				</div>
			</div>
		</div>
	</div>
</div>
