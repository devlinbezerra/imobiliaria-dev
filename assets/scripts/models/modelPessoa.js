import axios from 'axios';

export class modelPessoas {
	constructor(data) {
		this.url = 'localhost/api/<acao>/pessoa';
		this.data = data;
	}

	dataBase = acao => axios.post(this.url.replace('<acao>', acao), this.data);
}
