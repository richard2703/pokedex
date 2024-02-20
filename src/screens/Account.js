import { Text, View, SafeAreaView } from 'react-native';
import { API_HOST } from '@env';
import { useEffect, useState } from 'react';
import {getUsers} from '../api/pokemon'


export default function Account(){
		// getPokemonApi()
		// .then((res) => console.log("res", res))
		// .catch((e) => console.log(e));
		getUsers()
			.then((res) => console.log("res", res))
			.catch((e) => console.log(e));
	return (	
		<SafeAreaView>
			<Text> Cuenta</Text>
		</SafeAreaView>
	);
}