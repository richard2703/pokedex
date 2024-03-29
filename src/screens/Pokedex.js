import { useEffect, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
	// useEffect(()=>{
	// 	(async () => {
	// 		await loandPokemons();
	// 	})();
	// },[]);

	// const loandPokemons = async () => {
	// 	try {
	// 		const response = await getPokemonApi();
	// 		console.log(response);	
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }
	// return (
	//   <SafeAreaView>
	// 	<Text> Pokedex </Text>
	//   </SafeAreaView>
	// );

	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);
	// console.log("pokemons--->", pokemons);

	useEffect(() => {
		// getPokemonApi()
		// .then((res) => console.log("res", res))
		// .catch((e) => console.log(e));
		loadPokemons()
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonApi(nextUrl);
			// console.log(response);
			const pokemonsArray = [];
			for await (const pokemon of response.results) {

				const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

				pokemonsArray.push({
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					type: pokemonDetails.types[0].type.name,
					order: pokemonDetails.order,
					image:
						pokemonDetails.sprites.other["official-artwork"].front_default,
				});
			}
			setNextUrl(response.next)
			setPokemons([...pokemons, ...pokemonsArray]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView>
			<PokemonList
				pokemons={pokemons}
				loadPokemons={loadPokemons}
				isNext={nextUrl}
			/>
		</SafeAreaView>
	);

}
