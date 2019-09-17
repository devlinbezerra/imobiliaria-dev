const axios = require('axios');

module.exports = class ModelDadosBancarios {
	constructor(data) {
		this.url = 'http://localhost/facil/api/<acao>/dados_bancarios';
		this.data = data;
	}

	dataBase(acao) {
		return axios.post(this.url.replace('<acao>', acao), this.data);
	}
};
