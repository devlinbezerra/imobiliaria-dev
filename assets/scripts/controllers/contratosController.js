import {
	setEvent,
	getValue,
	getFields,
	resultMessage,
	enableButton,
	textHtml,
	popularCampos,
	DOM,
	updatedData
} from './../view';
import model from './../model';

//CRUD

//Create

export const inserirContrato = () => {
	const dados = {
		tabela: 'contratos',
		acao: 'inserir',
		data: getFields(DOM.camposContrato)
	};

	const res = model.db(dados).then(res => resultMessage(res.data));
};

//Read
export const listContratos = async () => {
	const prop = {
		tabela: 'contratos',
		acao: 'listar'
	};

	const res = await model.db(prop);

	return res.data;
};

export const getContrato = () => {
	const data = {
		id: parseInt(getValue(DOM.pk))
	};
	const prop = {
		tabela: 'contratos',
		acao: 'get',
		data
	};

	model.db(prop).then(res => {
		if (res.data.status) {
			popularCampos(res.data.result, DOM.camposContrato);
		} else {
			resultMessage(res.data.message);
		}
	});
};

//Update
export const updateContrato = () => {
	const campos = getFields(DOM.camposContrato);
	const data = Object.assign({ id: getValue(DOM.pk) }, campos);
	const prop = {
		tabela: 'contratos',
		acao: 'update',
		data
	};

	model.db(prop).then(res => resultMessage(res.data));
};

//Delete
export const deleteContrato = () => {
	const data = {
		id: getValue(DOM.pk)
	};

	const prop = {
		tabela: 'contratos',
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
