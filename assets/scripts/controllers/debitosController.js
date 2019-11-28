import {
	setEvent,
	getValue,
	getFields,
	resultMessage,
	enableButton,
	textHtml,
	popularCampos,
	DOM,
	updatedData,
	exitModal
} from './../view';
import model from './../model';

//CRUD

//Create

export const inserirDebito = () => {
	const dados = {
		tabela: 'debitos',
		acao: 'inserir',
		data: getFields(DOM.camposDebito)
	};

	const res = model.db(dados).then(res => {
		if (!res.data.status) {
			enableButton(DOM.saveButtonClientes, false);
		}
		resultMessage(res.data);
	});
};

//Read
export const listDebitos = async () => {
	const prop = {
		tabela: 'debitos',
		acao: 'listar'
	};

	const res = await model.db(prop);

	return res.data;
};

export const getDebito = () => {
	const data = {
		id: parseInt(getValue(DOM.pk))
	};
	const prop = {
		tabela: 'debitos',
		acao: 'get',
		data
	};

	model.db(prop).then(res => {
		if (res.data.status) {
			popularCampos(res.data.result, DOM.camposDebito);
		} else {
			resultMessage(res.data.message);
		}
	});
};

//Update
export const updateDebito = () => {
	const campos = getFields(DOM.camposDebito);
	const data = Object.assign({ id: getValue(DOM.pk) }, campos);
	const prop = {
		tabela: 'debitos',
		acao: 'update',
		data
	};

	model.db(prop).then(res => resultMessage(res.data));
};

//Baixar
export const baixaDebito = () => {
	const campos = getFields(DOM.camposBaixaDebito);
	const data = Object.assign({ id: getValue(DOM.pk) }, campos);
	const prop = {
		tabela: 'debitos',
		acao: 'update',
		data
	};
	console.log(prop);
	model.db(prop).then(res => resultMessage(res.data));
	exitModal('modal_baixa');
};

//Delete
export const deleteDebito = () => {
	const data = {
		id: getValue(DOM.pk)
	};

	const prop = {
		tabela: 'debitos',
		acao: 'delete',
		data
	};

	model.db(prop).then(res => {
		if (res.data.status) {
			window.location.replace('0');
		} else {
			resultMessage(res.data);
		}
	});
};
