import { Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {

	return (
		<Stack.Navigator screenOptions={{
			// headerShown: false
		}}
		>
			<Stack.Screen name="Pokedex" component={PokedexScreen} options={{ title: "", headerTransparent: true }} />
			<Stack.Screen name="Pokemon" component={PokemonScreen} options={{
				title: "",
				headerShown: true,
				headerTransparent: true,
				headerShadowVisible: false
			}} />
		</Stack.Navigator>
	);
}