import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

export default function PokemonCard(props) {
	const { pokemon } = props;

	const goToPokemon = () => {
		console.log(`Vamos al Pokemon: ${pokemon.name} `)
	};

	return (
		<TouchableWithoutFeedback onPress={goToPokemon}>
			<View style={styles.card}>
				<View style={styles.espacio}>
					<Text style={styles.number}>
						#{`${pokemon.order}`.padStart(3, 0)}
					</Text>
					<Text style={styles.name}>{pokemon.name}</Text>
					<Image source={{ uri: pokemon.image }} style={styles.image} />
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
		padding: 5,
	},
	// image: {
	//     width: 100,
	//     height: 100,
	// }
	number: {
		position: "absolute",
		right: 10,
		top: 10,
		color: "#fff",
		fontSize: 11,
	},
	name: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 15,
		paddingTop: 10,
	},
	image: {
		position: "absolute",
		bottom: 2,
		right: 2,
		width: 90,
		height: 90,
	},
});  