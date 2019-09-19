import { getValue } from './../view';
import model from './../model';

export const autenticarUsuario = () => {
	const data = {
		user_name: getValue('user_name'),
		pwd: getValue('pwd')
	};
	model.auth(data).then(res => {
		if (res.data) {
			document.querySelector('.message').style.color = 'blue';
			window.location.replace('producao/clientes');
		} else {
			document.querySelector('.message').style.color = 'red';
			document.querySelector('.message').textContent =
				'Usuário ou senha inválida';
		}
	});
};
