import view from './../view';
import model from './../model';

//CRUD

//Create
export const inserirBanco = async pessoa => {
	const data = {
		tabela: 'dados_bancarios',
		acao: 'inserir',
		data: Object.assign(
			{ cliente: pessoa },
			view.getFields(view.DOM.camposBanco)
		)
	};
	const banco = await model.db(data);
	view.exitModal(view.DOM.modalBanco);
	view.resultMessage(banco.data);
	view.enableButton(view.DOM.saveButtonBanco, true);
};

//Read
export const checkExistBank = cliente => {
	const prop = {
		tabela: 'dados_bancarios',
		acao: 'get',
		data: {
			cliente
		}
	};
	return model.db(prop);
};

export const getBanco = async (id = 0, cliente = 0) => {
	let status;
	let obj;
	if (id) {
		status = true;
		obj = { data: { id } };
	} else if (cliente) {
		status = true;
		obj = { data: { cliente } };
	} else {
		status = false;
	}
	if (status) {
		const propBanco = {
			tabela: 'dados_bancarios',
			acao: 'get'
		};

		const banco = await model.db(Object.assign(obj, propBanco));
		if (banco.data.status) {
			view.popularCampos(banco.data.result, view.DOM.camposBanco);
		}
	}
};

//Update
export const updateBank = async (id = 0, cliente = 0) => {
	const dataForm = view.getFields(view.DOM.camposBanco);
	let status;
	let data;
	if (id) {
		status = true;
		data = Object.assign({ id }, dataForm);
	} else if (cliente) {
		status = true;
		data = Object.assign({ cliente }, dataForm);
	} else {
		status = false;
	}
	if (status) {
		const prop = {
			tabela: 'dados_bancarios',
			acao: 'update',
			data
		};
		const updates = await model.db(prop);
		console.log(updates);
		if (updates.data.status) {
			view.exitModal(view.DOM.modalBanco);
			view.resultMessage(updates.data);
		} else {
			view.resultMessage(updates.data);
		}
	}
};

//Delete
export const deleteBank = async (id = 0, cliente = 0) => {
	let status;
	let obj;
	if (id) {
		status = true;
		obj = { data: { id } };
	} else if (cliente) {
		status = true;
		obj = { data: { cliente } };
	} else {
		status = false;
	}
	if (status) {
		const propBanco = {
			tabela: 'dados_bancarios',
			acao: 'delete'
		};

		const response = await model.db(Object.assign(obj, propBanco));
		return response;
	}
};
