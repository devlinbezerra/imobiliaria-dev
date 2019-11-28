import axios from 'axios';

export default (() => {
	/**
	 * proxys
	 * https://crossorigin.me/
	 * https://cors-anywhere.herokuapp.com/
	 *
	 */
	const proxy = 'https://crossorigin.me/';
	const local = '64.31.48.87';

	return {
		//prop é uma objeto com data (json com dados), tabela e acao (inserir, alterar, etc)
		db: prop =>
			axios.post(
				`${proxy}http://${local}/facil/api/${prop.acao}/${prop.tabela}`,
				prop.data
			),
		auth: data => axios.post(`http://${local}/facil/api/autenticar`, data)
	};
})();
