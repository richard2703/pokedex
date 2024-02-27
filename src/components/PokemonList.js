import { StyleSheet, Text, FlatList, ActivityIndicator, Platform } from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
	// console.log(props)

	const { pokemons, loadPokemons, isNext } = props;
	const loadMore = () => {
		// console.log("cargando mas pokemon")
		loadPokemons();
	}

	const renderItem = ({ item }) => (
		//   <Text>{item.name}</Text>
		<PokemonCard pokemon={item} />
	);

	return (
		//Como Renderisa dentro de un SafeView no es necesario aqui su View
		<FlatList
			data={pokemons} //Data a Mostrar
			numColumns={2} //en cuantas columnas se mostrara
			showsVerticalScrollIndicator={false} // Quitar la barra de scroll lateral
			keyExtractor={(item) => String(item.id)} //para identificar cada elemento. (obligatorio)
			// renderItem={({ item }) => <text>{item.name}</text>}
			renderItem={renderItem}
			contentContainerStyle={styles.flatListContentContainer}
			onEndReached={isNext && loadMore} //Al casi termianr el escrol ejecuta la funcion
			onEndReachedThreshold={0.1}
			ListFooterComponent={
				isNext && (
					<ActivityIndicator
						size="large"
						style={styles.spinner}
						color="#AEAEAE"
					/>
				)
			}
		/>
	)
}

const styles = StyleSheet.create({
	flatListContentContainer: {
		paddingHorizontal: 15,
		marginTop: Platform.OS === "android" ? 30 : 0
	},
	spinner: {
		marginTop: 20,
		marginBottom: 60,
	}
});
