import axios from 'axios';

export default (() => {
	/**
	 * proxys
	 * https://crossorigin.me/
	 * https://cors-anywhere.herokuapp.com/
	 *
	 */
	const proxy = ''; //'https://crossorigin.me/';
	const local = '64.31.48.87';
	const config = {
		headers: { 'Access-Control-Allow-Origin': '*' },
		crossdomain: true
	};

	return {
		//prop é uma objeto com data (json com dados), tabela e acao (inserir, alterar, etc)
		db: prop =>
			axios.post(
				`${proxy}http://${local}/facil/api/${prop.acao}/${prop.tabela}`,
				prop.data,
				config
			),
		auth: data => axios.post(`http://${local}/facil/api/autenticar`, data)
	};
})();
