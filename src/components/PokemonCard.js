import { StyleSheet,Text, View,Image,TouchableWithoutFeedback } from 'react-native'

export default function PokemonCard(props) {
		const {pokemon} = props;

		const goToPokemon = () =>{
			console.log(`Vamos al Pokemon: ${pokemon.name} `)
		};

	return (
		<TouchableWithoutFeedback onPress={goToPokemon}>
			<View style={styles.card}>
				<View style={styles.espacio}>
				<Text> {pokemon.name} </Text>
				</View>
			</View>
		</TouchableWithoutFeedback >
	)
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#a4d1b3",
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 20
    },
	espacio: {
        flex: 1,
		padding:5,
    },
    image: {
        width: 100,
        height: 100,
    }
});  