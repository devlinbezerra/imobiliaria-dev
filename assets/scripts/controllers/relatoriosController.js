import * as view from './../view';
import model from './../model';

export const loadDebitosReport = async () => {
	const prop = {
		tabela: 'debitos',
		acao: 'relatorio'
	};

	const res = await model.db(prop);

	return res.data;
};

export const filtrarDebitos = async () => {
	const prop = {
		tabela: 'debitos',
		acao: 'relatorio',
		data: view.getFields(view.DOM.camposRelatorioDebitos)
	};
	const cloneProp = { ...prop };
	Object.keys(cloneProp.data).forEach(el => {
		if (cloneProp.data[el] === '0' || cloneProp.data[el] === '') {
			delete cloneProp.data[el];
		}
	});
	console.log(cloneProp);
	const res = await model.db(prop);
	console.log(res.data);
	if (res.data.status) {
		view.loadList(res.data.result, 'debitos_rep');
	}
};
