// rfc
import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
const GoalItem = (props) => {
	return (
		<TouchableNativeFeedback onPress={props.onDelete}>
			<View style={styles.listItems}>
				<Text >{props.items}</Text>
			</View>
		</TouchableNativeFeedback>
	);
}

const styles = StyleSheet.create({
	listItems: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		marginVertical: 10,

	}
})

export default GoalItem;
