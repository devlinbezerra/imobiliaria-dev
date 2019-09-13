import view from './../view';
import model from './../model';

export const autenticarUsuario = () => {
	const data = {
		user_name: view.getValue('user_name'),
		pwd: view.getValue('pwd')
	};
	model.auth(data).then(res => {
		if (res.data) {
			document.querySelector('.message').style.color = 'blue';
			window.location.replace('producao/form_clientes');
			// document.querySelector('.message').textContent =
			// 	'Informações autenticadas';
		} else {
			document.querySelector('.message').style.color = 'red';
			document.querySelector('.message').textContent =
				'Usuário ou senha inválida';
		}
	});
};
