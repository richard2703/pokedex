import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash"
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
	try {
		const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
		// console.log(response);
		// return response;
		return JSON.parse(response || '[]');
	} catch (error) {
		throw error;
	}
}

export async function addPokemonFavoriteApi(id) {
	try {
		const favorites = await getPokemonsFavoriteApi();
		// console.log(id);
		favorites.push(id);
		//Se guarda como un string
		await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));

	} catch (error) {
		throw error;
	}
};