import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash"
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
	try {
		const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
		// console.log(response);
		return response;
	} catch (error) {
		throw error;
	}
}

export async function addPokemonFavoriteApi(id) {
	try {
		const favorites = [];
		// console.log(id);
		favorites.push(id);
		//Se guarda como un string
		await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
		// Probar si se guarda completo
		// await AsyncStorage.setItem(FAVORITE_STORAGE, favorites);

	} catch (error) {
		throw error;
	}
};