import React from 'react'
import { Text, View } from 'react-native'
import useAuth from '../../hooks/useAuth';

export default function UserData() {
	const { auth } = useAuth();
	console.log("data");

	console.log(auth);
	return (
		<View>
			<Text> UserData...  </Text>
			{/* <Text> {auth}  </Text> */}

		</View>
	);
}
