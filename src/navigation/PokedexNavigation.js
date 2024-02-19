import { Text, View, SafeAreaView } from 'react-native';
import {createNativeStackNavigator} from"@react-navigation/native-stack"
import PokedexScreen from '../screens/Pokedex';
import Favorite from '../screens/Favorite';
import PokemonScreen from '../screens/pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation(){

	return (	
	<Stack.Navigator>
		<Stack.Screen name="Pokedex" component={PokedexScreen}/>
		<Stack.Screen name="Pokemon" component={PokemonScreen}/>
	</Stack.Navigator>
	);
}