import { Text, View, SafeAreaView } from 'react-native';
import {createNativeStackNavigator} from"@react-navigation/native-stack"
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation(){

	return (	
	<Stack.Navigator>
		{/* <Stack.Screen name="Pokedex" component={PokedexScreen}/> */}
		<Stack.Screen name="Pokemon" component={PokemonScreen}/>
	</Stack.Navigator>
	);
}