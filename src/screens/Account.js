import { Text, View, SafeAreaView } from 'react-native';
import { API_URL } from '@env';

export default function Account(){
	console.log(API_URL);

	return (	
		<SafeAreaView>
			<Text> Cuenta</Text>
		</SafeAreaView>
	);
}