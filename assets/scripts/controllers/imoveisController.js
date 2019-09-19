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

export const inserirImovel = () => {
	const dados = {
		tabela: 'imoveis',
		acao: 'inserir',
		data: getFields(DOM.camposImovel)
	};

	const res = model.db(dados).then(res => resultMessage(res.data));
};

//Read
export const listImoveis = async () => {
	const prop = {
		tabela: 'imoveis',
		acao: 'listar'
	};

	const res = await model.db(prop);

	return res.data;
};

export const getImovel = () => {
	const data = {
		id: parseInt(getValue(DOM.pk))
	};
	const prop = {
		tabela: 'imoveis',
		acao: 'get',
		data
	};

	model.db(prop).then(res => {
		if (res.data.status) {
			popularCampos(res.data.result, DOM.camposImovel);
		} else {
			resultMessage(res.data.message);
		}
	});
};

//Update
export const updateImovel = () => {
	const campos = getFields(DOM.camposImovel);
	const data = Object.assign({ id: getValue(DOM.pk) }, campos);
	const prop = {
		tabela: 'imoveis',
		acao: 'update',
		data
	};

	model.db(prop).then(res => resultMessage(res.data));
};

//Delete
export const deleteImovel = () => {
	const data = {
		id: getValue(DOM.pk)
	};

	const prop = {
		tabela: 'imoveis',
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
