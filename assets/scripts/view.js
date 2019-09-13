import fg from './formGetter';

export default (() => {
	const DOM = {
		pk: 'pk',
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
		mensagemHead: 'message-head',
		mensagemBody: 'message-body',
		modalMensagem: 'modal_resultado',
		modalBanco: 'modal_dados_bancarios',
		modalConfirmDelete: 'modal_confirm_delete'
	};

	const bankButton =
		"<button id='cadastrar_banco' data-toggle='modal' data-target='#modal_dados_bancarios'class='btn btn-info'>Dados Bancários</button>";
	const Cbuttons =
		"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button><button id='form_clientes_salvar' class='btn btn-primary'>Salvar</button>";
	const RUDbuttons =
		"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button><button id='botao_alterar_clientes' class='btn btn-warning'>Alterar</button><button id='botao_clientes_excluir' data-toggle='modal' data-target='#modal_confirm_delete' class='btn btn-danger'>Excluir</button>";

	let updatedData = {};

	const enableButton = (button, status) => {
		document.getElementById(button).disabled = status;
	};

	const setUpdatedFields = fieldsClass => {
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

	const popularCampos = (data, className) => {
		const nodes = Array.from(document.querySelectorAll(className));
		nodes.forEach(nd => (nd.value = data[nd.id]));
	};

	const callClientesSaveButton = () => {
		document.querySelector(DOM.buttonArea).innerHTML = Cbuttons + bankButton;
		enableButton(DOM.cadastrarButtonBanco, true);
	};

	const callClientesUpdateButton = () => {
		document.querySelector(DOM.buttonArea).innerHTML = RUDbuttons + bankButton;
	};

	const callModal = modal => {
		$('#' + modal).modal('show');
	};

	const exitModal = modal => {
		$('#' + modal).modal('hide');
	};

	return {
		DOM,
		updatedData,
		callModal,
		exitModal,
		callClientesSaveButton,
		callClientesUpdateButton,
		popularCampos,
		setUpdatedFields,
		enableButton,
		setEvent: (el, ev, fn) => {
			if (document.getElementById(el)) {
				document.getElementById(el).addEventListener(ev, fn);
			}
		},
		getValue: el => {
			if (document.getElementById(el)) {
				return document.getElementById(el).value;
			}
		},
		setValue: (el, val) => {
			if (document.getElementById(el)) {
				document.getElementById(el).value = val;
			}
		},
		getFields: elementClass => {
			return fg(elementClass);
		},
		resultMessage: res => {
			console.log(res);
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
		},
		limparCampos: campoClass => {
			const nodes = Array.from(document.querySelectorAll(campoClass));
			nodes.forEach(nd => (nd.value = ''));
		},
		textHtml: (el, text) => {
			document.getElementById(el).textContent = text;
		}
	};
})();
