import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import { addPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
	const { id } = props;
	// console.log(id);

	const addFavorite = async () => {
		console.log("funcion", id);
		await addPokemonFavoriteApi(id);
	};

	return (

		<Icon
			name='heart'
			color='#fff'
			size={25}
			onPress={addFavorite}
		/>
	)
}
