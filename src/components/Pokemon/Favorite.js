import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import { addPokemonFavoriteApi, getPokemonsFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
	const { id } = props;
	console.log(id);
	// console.log(pokemonId)

	const addFavorite = async () => {
		console.log("funcion", id);
		await addPokemonFavoriteApi(id);
	};

	const getFavorite = async () => {
		await getPokemonsFavoriteApi();
	};

	return (
		<>
			<Icon
				name='heart'
				color='#fff'
				size={25}
				onPress={addFavorite}
			/>
			<Icon
				name='user'
				color='#fff'
				size={25}
				onPress={getFavorite}
			/>
		</>

	)
}
