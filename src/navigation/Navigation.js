import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import PokedexNavigation from "./PokedexNavigation";

import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Favorite" component={Favorite} options=
				{{
					tabBarLabel: "Favoritos",
					tabBarBadge: 3,
					tabBarIcon: ({ color, size }) => (
						<Icon name="heart" color={color} size={size} />
					),
					headerTitle: "Favoritos"
				}} />

			{/* <Tab.Screen name="Pokedex" component={Pokedex} options=
			{{ 
				tabBarLabel: "",  
			 	tabBarIcon: () => renderPokeball(), 
				headerTitle: "Pokedex"
				}}/> */}

			<Tab.Screen name="Pokedex" component={PokedexNavigation} options=
				{{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball(),
					title: "",
				}} />

			<Tab.Screen name="Account" component={Account} options=
				{{
					tabBarLabel: "Mi Cuenta",
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
					headerTitle: "Mi cuenta"
				}} />
		</Tab.Navigator>

	);
}

function renderPokeball() {
	return (
		<Image
			source={require("../assets/pokeball.png")}
			style={{ width: 35, height: 35, top: 5 }}
		/>
	);
}

