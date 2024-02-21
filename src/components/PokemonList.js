import { StyleSheet,Text, FlatList} from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
	// console.log(props)

	const {pokemons} = props;

	const renderItem = ({ item }) => (
		//   <Text>{item.name}</Text>
		<PokemonCard pokemon={item}/>
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
		/>
		)
}

const styles = StyleSheet.create({
	flatListContentContainer: {
	  paddingHorizontal: 15,
	},
  });
