import fg from './formGetter';

export default (() => {
	const DOM = {
		pk: 'pk',
		loginButton: 'enviar',
		estadoCivil: 'estado_civil',
		buttonArea: '.botoes',
		buttonDelete: 'botao_clientes_excluir',
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
		modalBanco: 'modal_dados_bancarios'
	};

	const Cbuttons =
		"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button>    <button id='cadastrar_banco' data-toggle='modal' data-target='#modal_dados_bancarios'class='btn btn-info' disabled>Dados Bancários</button><button id='form_clientes_salvar' class='btn btn-primary'>Salvar</button>";
	const RUDbuttons =
		"<button class='btn btn-default'><a href='form_clientes' id='botao_cancelar_clientes'>Cancelar</a></button><button id='cadastrar_banco' data-toggle='modal' data-target='#modal_dados_bancarios'class='btn btn-info' disabled>Dados Bancários</button><button id='botao_alterar_clientes' class='btn btn-warning'>Alterar</button><button id='botao_clientes_excluir' class='btn btn-danger'>Excluir</button>";

	let updatedData = {};

	const setUpdatedFields = fieldsClass => {
		updatedData[fieldsClass] = [];
		const nodes = Array.from(document.querySelectorAll(fieldsClass));
		nodes.forEach(el => {
			el.addEventListener('change', e => {
				const key = e.target.id;
				const value = e.target.value;
				updatedData[fieldsClass].push(`{"${key}": "${value}"}`);
			});
		});
	};

	const popularCampos = (data, className) => {
		const nodes = Array.from(document.querySelectorAll(className));
		nodes.forEach(nd => (nd.value = data[nd.id]));
	};

	const callSaveButtons = () => {
		document.querySelector(DOM.buttonArea).innerHTML = Cbuttons;
	};

	const callUpdateDeleteButtons = () => {
		document.querySelector(DOM.buttonArea).innerHTML = RUDbuttons;
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
		callSaveButtons,
		callUpdateDeleteButtons,
		popularCampos,
		setUpdatedFields,
		enableButton: (button, status) => {
			document.getElementById(button).disabled = status;
		},
		setEvent: (el, ev, fn) => {
			if (document.getElementById(el)) {
				document.getElementById(el).addEventListener(ev, fn);
				console.log(`Existe o elemento ${el}.`);
			} else {
				console.log(`Não existe o elemento ${el}.`);
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
