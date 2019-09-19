/**
 * Pendências:
 * ok Bloqueio de multi inserção, função campo select e join para evitar código de foreigh key nas listas
 * Corrigir faixa de rodapé que se movimenta quando abre parte do desenvolvedor
 * Programar o que será feito quando sistem retorna um erro de SQL. Por exemplo: Quando uma exclusão não dá certo devido a um foreign key
 *
 */
import fg from './formGetter';

export const loadMenu = modulo => {
	const filho = document.querySelector('.' + modulo);
	if (filho) {
		const pai = filho.parentElement;
		const avo = document.getElementById(pai.id).parentElement;
		avo.classList.add('active');
		filho.classList.add('active');
	}
};

export const loadList = (data, modulo) => {
	if (modulo === 'clientes' || modulo === 'inquelinos') {
		data.forEach(el => {
			let html = `
			<tr>
				<td>${el.nome}</td>
				<td>${el.telefone_comercial}</td>
				<td>${el.telefone_residencial}</td>
				<td>${el.cidade}</td>
				<td>${el.estado_civil}</td>
				<td>${el.renda}</td>
				<td>${el.anotacao}</td>
				<td><a target='_blank' href='https://api.whatsapp.com/send?phone=55${el.telefone_comercial}&text=Oi%2C%20Tudo%20bem%3F'><img width='20' height='20' src='./../assets/images/general/whatsapp.png' /></a></td>
				<td><a href='form_${modulo}/${el.id}'>Clique aqui para visualizar ou Alterar</a></td>
			</tr>`;
			document.querySelector('.list').insertAdjacentHTML('beforeend', html);
		});
	} else if (modulo === 'imoveis') {
		data.forEach(el => {
			let html = `
			<tr>
				<td>${el.descricao}</td>
				<td>${el.rua}</td>
				<td>${el.bairro}</td>
				<td>${el.cidade}</td>
				<td>${el.matricula}</td>
				<td>${el.proprietario_nome}</td>
				<td>${el.anotacao}</td>
				<td><a href='form_${modulo}/${el.id}'>Clique aqui para visualizar ou Alterar</a></td>
			</tr>`;
			document.querySelector('.list').insertAdjacentHTML('beforeend', html);
		});
	} else if (modulo === 'contratos') {
		data.forEach(el => {
			let html = `
			<tr>
				<td>${el.numero_contrato}</td>
				<td>${el.imovel_descricao}</td>
				<td>${el.contratante_nome}</td>
				<td>${el.contratado_nome}</td>
				<td>${el.inicio}</td>
				<td>${el.termino}</td>
				<td><a target='_blank' href='${el.link}'><img width='20' height='20' src='./../assets/images/general/drive.png' /></a></td>
				<td><a href='form_${modulo}/${el.id}'>Clique aqui para visualizar ou Alterar</a></td>
			</tr>`;
			document.querySelector('.list').insertAdjacentHTML('beforeend', html);
		});
	} else if (modulo === 'debitos') {
		data.forEach(el => {
			let html = `
			<tr>
				<td>${el.vencimento}</td>
				<td>${el.imovel}</td>
				<td>${el.contratante}</td>
				<td>${el.valor}</td>
				<td>${el.numero_contrato}</td>
				<td>${el.status}</td>
				<td><a href='form_${modulo}/${el.id}'>Clique aqui para visualizar ou Alterar</a></td>
			</tr>`;
			document.querySelector('.list').insertAdjacentHTML('beforeend', html);
		});
	}
	$('#lista').footable();
};

export const loadSelectField = (field, data) => {
	let key;
	if (
		field === 'proprietario' ||
		field === 'contratante' ||
		field === 'contratado'
	) {
		key = 'nome';
	} else if (field === 'imovel') {
		key = 'descricao';
	} else if (field === 'contrato') {
		key = 'numero_contrato';
	}

	data.forEach(el => {
		let html = `<option value='${el.id}'>${el[key]}</option>`;
		document.getElementById(field).insertAdjacentHTML('beforeend', html);
	});
};

export const DOM = {
	local: 'localhost/facil',
	pk: 'pk',
	modulo: 'modulo',
	loginButton: 'enviar',
	estadoCivil: 'estado_civil',
	buttonArea: '.botoes',
	buttonDelete: 'botao_clientes_excluir',
	buttonConfirmDelete: 'excluir_registro',
	buttonUpdate: 'botao_alterar_clientes',
	saveButtonClientes: 'form_clientes_salvar',
	saveButtonBanco: 'salvar_banco',
	cadastrarButtonBanco: 'cadastrar_banco',
	cancelButtonClientes: 'botao_cancelar_clientes',
	camposPessoa: '.campo',
	camposConjuge: '.campo_conjuge',
	camposBanco: '.banco',
	camposImovel: '.campo_imovel',
	camposContrato: '.campo_contrato',
	camposDebito: '.campo_debitos',
	mensagemHead: 'message-head',
	mensagemBody: 'message-body',
	modalMensagem: 'modal_resultado',
	modalBanco: 'modal_dados_bancarios',
	modalConfirmDelete: 'modal_confirm_delete',
	list: 'list'
};

export const bankButton =
	"<button id='cadastrar_banco' data-toggle='modal' data-target='#modal_dados_bancarios'class='btn btn-info'>Dados Bancários</button>";
export const Cbuttons =
	"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button><button id='form_clientes_salvar' class='btn btn-primary'>Salvar</button>";
export const RUDbuttons =
	"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button><button id='botao_alterar_clientes' class='btn btn-warning'>Alterar</button><button id='botao_clientes_excluir' data-toggle='modal' data-target='#modal_confirm_delete' class='btn btn-danger'>Excluir</button>";

export let updatedData = {};

export const enableButton = (button, status) => {
	document.getElementById(button).disabled = status;
};

export const setUpdatedFields = fieldsClass => {
	updatedData[fieldsClass] = [];
	const nodes = Array.from(document.querySelectorAll(fieldsClass));
	nodes.forEach(el => {
		el.addEventListener('change', e => {
			const key = e.target.id;
			const value = e.target.value;
			updatedData[fieldsClass].unshift(`{"${key}": "${value}"}`);
		});
	});
};

export const popularCampos = (data, className) => {
	const nodes = Array.from(document.querySelectorAll(className));
	nodes.forEach(nd => (nd.value = data[nd.id]));
};

export const callClientesSaveButton = () => {
	document.querySelector(DOM.buttonArea).innerHTML = Cbuttons + bankButton;
	enableButton(DOM.cadastrarButtonBanco, true);
};

export const callClientesUpdateButton = () => {
	document.querySelector(DOM.buttonArea).innerHTML = RUDbuttons + bankButton;
};

export const callInquelinosSaveButton = () => {
	document.querySelector(DOM.buttonArea).innerHTML = Cbuttons;
};

export const callInquelinosUpdateButton = () => {
	document.querySelector(DOM.buttonArea).innerHTML = RUDbuttons;
};

export const callModal = modal => {
	$('#' + modal).modal('show');
};

export const exitModal = modal => {
	$('#' + modal).modal('hide');
};

export const setEvent = (el, ev, fn) => {
	if (document.getElementById(el)) {
		document.getElementById(el).addEventListener(ev, fn);
	}
};

export const getValue = el => {
	if (document.getElementById(el)) {
		return document.getElementById(el).value;
	} else {
		return false;
	}
};

export const setValue = (el, val) => {
	if (document.getElementById(el)) {
		document.getElementById(el).value = val;
	}
};

export const getFields = elementClass => {
	return fg(elementClass);
};

export const resultMessage = res => {
	const msgHead = document.getElementById(DOM.mensagemHead);
	const modal = document.getElementById(DOM.modalMensagem).classList;
	if (res.status) {
		if (modal.contains('hmodal-danger')) {
			modal.remove('hmodal-danger');
			modal.add('hmodal-success');
		}
		msgHead.textContent = 'Sucesso!';
	} else {
		if (modal.contains('hmodal-success')) {
			modal.remove('hmodal-success');
			modal.add('hmodal-danger');
		}
		msgHead.textContent = 'Erro! :(';
	}
	document.getElementById(DOM.mensagemBody).textContent = res.message;
	callModal(DOM.modalMensagem);
};

export const limparCampos = campoClass => {
	const nodes = Array.from(document.querySelectorAll(campoClass));
	nodes.forEach(nd => (nd.value = ''));
};

export const textHtml = (el, text) => {
	document.getElementById(el).textContent = text;
};
