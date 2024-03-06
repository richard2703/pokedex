import { Text, View, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
	const { types } = props;
	// console.log(types);

	const color = (type) => getColorByPokemonType(type);

	return (
		<View style={styles.content}>
			{types.map(item => (
				<View
					key={item.type.name}
					style={{ backgroundColor: color(item.type.name), ...styles.pill }}
				>
					<Text>{capitalize(item.type.name)}</Text>
				</View>
			))
			}
		</View >
		// <View style={styles.content}>
		// 	{map(types, (item, index) => (
		// 		<View
		// 			key={index}
		// 			style={{
		// 				...styles.pill,
		// 				backgroundColor: getColorByPokemonType(item.type.name),
		// 			}}
		// 		>
		// 			<Text>{capitalize(item.type.name)}</Text>
		// 		</View>
		// 	))}
		// </View>
	)
}

const styles = StyleSheet.create({
	content: {
		marginTop: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	pill: {
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 20,
		marginHorizontal: 10,
	},
})