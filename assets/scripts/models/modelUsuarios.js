const axios = require('axios');

module.exports = class ModelUsuario {
	constructor(data) {
		this.url = 'http://localhost/facil/api/<acao>';
		this.data = data;
	}

	authenticate() {
		return axios.post(this.url.replace('<acao>', 'autenticar'));
	}
};
