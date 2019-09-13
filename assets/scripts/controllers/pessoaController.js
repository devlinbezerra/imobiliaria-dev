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
import {
	inserirBanco,
	getBanco,
	deleteBank,
	updateBank,
	checkExistBank
} from './bancoController';

/*
PROBLEMAS
Quando altera a data sai bugada
*/

let tmp = {};

//VIEW
const mostrarConjugeForm = () => {
	const res = getValue('estado_civil');
	if (res === 'Casado(a)') {
		$('#conjuge').collapse('show');
	} else {
		$('#conjuge').collapse('hide');
	}
};
setEvent(DOM.estadoCivil, 'change', mostrarConjugeForm);

//CRUD

//Create
const registrarBanco = () => {
	inserirBanco(tmp.pessoaId);
};

const inserirPessoa = async () => {
	//Inserir conjuge
	const conjugeStatus = getValue(DOM.estadoCivil) === 'Casado(a)';
	let conjuge;
	let pessoa;
	if (conjugeStatus) {
		const conjugeDados = {
			tabela: 'pessoa',
			acao: 'inserir',
			data: getFields(DOM.camposConjuge)
		};
		conjuge = await model.db(conjugeDados);
	}

	//Inserir pessoa
	if (conjugeStatus && conjuge.data.status) {
		const prop = {
			tabela: 'pessoa',
			acao: 'inserir',
			data: Object.assign(
				{ conjuge: conjuge.data.id },
				getFields(DOM.camposPessoa)
			)
		};
		pessoa = await model.db(prop);
		resultMessage(pessoa.data);
	} else if (conjugeStatus) {
		resultMessage(conjuge.data);
	} else {
		const prop = {
			tabela: 'pessoa',
			acao: 'inserir',
			data: getFields(DOM.camposPessoa)
		};
		pessoa = await model.db(prop);
		resultMessage(pessoa.data);
	}

	tmp.pessoaId = pessoa.data.id;
	if (pessoa.data.status) {
		enableButton(DOM.cadastrarButtonBanco, false);
		enableButton(DOM.saveButtonClientes, true);
		textHtml(DOM.cancelButtonClientes, 'Novo Registro');
		setEvent(DOM.saveButtonBanco, 'click', registrarBanco);
	}
};

//Read
const getPessoa = async () => {
	const data = {
		id: parseInt(getValue(DOM.pk))
	};
	const prop = {
		tabela: 'pessoa',
		acao: 'get',
		data
	};

	const pessoa = await model.db(prop);
	popularCampos(pessoa.data.result, DOM.camposPessoa);
	if (pessoa.data.result.estado_civil === 'Casado(a)') {
		const prop = {
			tabela: 'pessoa',
			acao: 'get',
			data: {
				id: parseInt(pessoa.data.result.conjuge)
			}
		};
		const conjuge = await model.db(prop);
		popularCampos(conjuge.data.result, DOM.camposConjuge);
		$('#conjuge').collapse('show');
	}
	getBanco(0, data.id);
};

//Update
const alterarBanco = () => {
	const cliente = parseInt(getValue(DOM.pk));
	checkExistBank(cliente).then(res => {
		if (res.data.status) {
			updateBank(0, cliente);
		} else {
			inserirBanco(cliente);
		}
	});
};
const alterarPessoa = async () => {
	//Resolver problema da data
	let data;
	const id = parseInt(getValue(DOM.pk));
	// Alterar a pessoa
	updatedData[DOM.camposPessoa].forEach(el => {
		data = Object.assign(JSON.parse(el), data);
	});
	data = Object.assign({ id }, data);
	const prop = {
		tabela: 'pessoa',
		acao: 'update',
		data
	};
	const pessoaResponse = await model.db(prop);

	//Se for casado tem que alterar o conjuge também
	if (pessoaResponse.data.status) {
		const propPessoa = {
			tabela: 'pessoa',
			acao: 'get',
			data: {
				id
			}
		};

		const pessoa = await model.db(propPessoa);
		if (
			pessoa.data.result.estado_civil === 'Casado(a)' &&
			pessoa.data.result.conjuge
		) {
			let dataConjuge;
			updatedData[DOM.camposConjuge].forEach(el => {
				dataConjuge = Object.assign(JSON.parse(el), dataConjuge);
			});
			dataConjuge = Object.assign(
				{ id: pessoa.data.result.conjuge },
				dataConjuge
			);
			const prop = {
				tabela: 'pessoa',
				acao: 'update',
				data: dataConjuge
			};
			const conjugeResponse = await model.db(prop);
			resultMessage(conjugeResponse.data);
		} else if (
			pessoa.data.result.estado_civil === 'Casado(a)' &&
			!pessoa.data.result.conjuge
		) {
			let insertDataConjuge;
			updatedData[DOM.camposConjuge].forEach(el => {
				insertDataConjuge = Object.assign(JSON.parse(el), insertDataConjuge);
			});
			insertDataConjuge = Object.assign({ tipo: 'conjuge' }, insertDataConjuge);
			const propInsertConjuge = {
				tabela: 'pessoa',
				acao: 'inserir',
				data: insertDataConjuge
			};

			const conjugeInsert = await model.db(propInsertConjuge);
			const dataPessoaConjuge = {
				conjuge: conjugeInsert.data.id,
				id: pessoa.data.result.id
			};
			const propUpdatePessoa = {
				tabela: 'pessoa',
				acao: 'update',
				data: dataPessoaConjuge
			};
			await model.db(propUpdatePessoa);

			resultMessage(conjugeInsert.data);
		} else {
			resultMessage(pessoaResponse.data);
		}
	} else {
		resultMessage(pessoaResponse.data);
	}

	//Se alterar o estado civil para casado e ainda não tem conjuge, tem que cadastrar o conjuge
};

//Delete
const excluirPessoa = async () => {
	//1. Pegar o código
	const id = parseInt(getValue(DOM.pk));
	const propPessoa = {
		tabela: 'pessoa',
		acao: 'get',
		data: {
			id
		}
	};
	const pessoa = await model.db(propPessoa);
	let conjuge = 0;
	if (pessoa.data.result.estado_civil === 'Casado(a)') {
		conjuge = pessoa.data.result.conjuge;
	}

	//2. Excluir dados bancários
	const excluirBanco = await deleteBank(0, id);

	//2. Excluir pessoa
	if (excluirBanco.status) {
		const prop = {
			tabela: 'pessoa',
			acao: 'delete',
			data: {
				id
			}
		};

		const excluir = await model.db(prop);

		if (excluir.data.status) {
			const prop = {
				tabela: 'pessoa',
				acao: 'delete',
				data: {
					id: conjuge
				}
			};

			const excluirConjuge = await model.db(prop);
			resultMessage(excluirConjuge.data);
			window.location.replace('0');
		} else {
			resultMessage(excluir.data);
		}
	} else {
		resultMessage(excluirBanco.data);
	}
};

export { inserirPessoa, getPessoa, excluirPessoa, alterarPessoa, alterarBanco };
