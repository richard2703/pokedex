import React, { Componentm, useState, useEffect } from 'react'
import { Text, ScrollView } from 'react-native'
import { getPokemonApi, getPokemonDetailsApi } from '../api/pokemon';
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from "../hooks/useAuth";

export default function Pokemon(props) {
	const { route: { params }, navigation } = props
	// console.log(JSON.stringify(params.id, null, 2));
	const [pokemon, setPokemon] = useState(null);
	const { auth } = useAuth();

	useEffect(() => {
		navigation.setOptions({
			// headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
			headerRight: () => (auth ? <Favorite id={params.id} /> : null),

			// headerRight: () => (<Favorite id={pokemon.id} />),

			headerLeft: () => (
				<Icon
					name="arrow-left"
					color="#fff"
					size={20}
					style={{ marginLeft: 20 }}
					onPress={navigation.goBack}
				/>
			),
		});
	}, [navigation, params]);

	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemonDetailsApi(params.id);
				// console.log();
				// console.log(JSON.stringify(params.id, null, 2));
				setPokemon(response);
			} catch (error) {
				console.error(error);
				navigation.goBack();
			}
		})()
	}, [params])

	if (!pokemon) return null;
	return (
		<ScrollView>
			<Header
				name={pokemon.name}
				order={pokemon.order}
				image={pokemon.sprites.other["official-artwork"].front_default}
				type={pokemon.types[0].type.name}
			/>
			<Type types={pokemon.types} />
			<Stats stats={pokemon.stats} />

		</ScrollView>
	);
}

