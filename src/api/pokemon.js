import { API_HOST } from '@env';

export async function getPokemonApi(endPointUrl) {
	try {
		var cantidad = 20;
		const url = `${API_HOST}/pokemon?limit=${cantidad}&offset=0`;
		const response = await fetch(endPointUrl || url);
		const result = await response.json();
		return result;
	}
	catch (error) {
		throw error;
	}
}

export async function getPokemonDetailsByUrlApi(url) {
	try {
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
}

export async function getUsers() {
	try {
		const url = `http://127.0.0.1:8000/api/test/usuarios`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	}
	catch (error) {
		throw error;
	}
}