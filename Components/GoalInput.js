import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const GoalHandler = () => {
		props.GoalHandler(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.TextBlock}>
				<TextInput
					placeholder="Course Goal"
					style={styles.InputText}
					onChangeText={event => setEnteredGoal(event)}
					value={enteredGoal}
				/>
				<View style={styles.ModalButtons} >
					<Button title="Add" onPress={GoalHandler} />
					<Button title="Cancel" color='red' onPress={props.onCancelButton} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	TextBlock: { flex: 1, justifyContent: "center", alignItems: "center" },
	InputText: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		width: "80%",
		marginBottom: 10
	},
	ModalButtons: {
		flexDirection: 'row',
		justifyContent:'space-around',
		width:'60%'
	}
});

export default GoalInput;
