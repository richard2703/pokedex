import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"

export default function Favorite(props) {
	const { id } = props;
	console.log(id);
	// console.log(pokemonId)

	const addFavorite = () => {
		console.log('add to favorite')
	}
	return (
		<Icon
			name='heart'
			color='#fff'
			size={25}
			onPress={() => addFavorite()}
		/>
	)
}
