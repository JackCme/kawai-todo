import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		width: width - 50,
		borderBottomColor: "#bbb",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	text: {
		fontWeight: "600",
		fontSize: 20,
		marginVertical: 20
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginRight: 20,
		borderColor: "red",
		borderWidth: 3
	},
	completedCircle: {
		borderColor: "#bbb"
	},
	completedText: {
		color: "#bbb",
		textDecorationLine: "line-through"
	},
	column: {
		flexDirection: "row",
		alignItems: "center",
		// justifyContent: "space-between",
		width: width / 2
	},
	actions: {
		flexDirection: "row"
	},
	actionContainer: {
		marginVertical: 10,
		marginHorizontal: 10
	},
	input: {
		padding: 0,
		width: width / 2
	}
});

const Todo = ({ text }) => {
	const [state, setState] = React.useState({
		isEditing: false,
		isCompleted: false,
		todoValue: ""
	});

	const setCompleted = () => {
		setState({
			...state,
			isCompleted: !state.isCompleted
		});
	};

	const startEditing = () => {
		setState({
			...state,
			isEditing: true,
			todoValue: text
		});
	};

	const finishEditing = () => {
		setState({
			...state,
			isEditing: false
		});
	};

	const controlInput = text => {
		setState({
			...state,
			todoValue: text
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<TouchableOpacity onPress={setCompleted}>
					<View
						style={[
							styles.circle,
							state.isCompleted && styles.completedCircle
						]}></View>
				</TouchableOpacity>
				{state.isEditing ? (
					<TextInput
						style={[
							styles.text,
							styles.input
							// state.isCompleted && styles.completedText
						]}
						value={state.todoValue}
						multiline={true}
						onChangeText={controlInput}
						returnKeyType={"done"}
						onBlur={finishEditing}
					/>
				) : (
					<Text
						style={[styles.text, state.isCompleted && styles.completedText]}>
						{text}
					</Text>
				)}
			</View>
			{state.isEditing ? (
				<View style={styles.actions}>
					<TouchableOpacity onPressOut={finishEditing}>
						<View style={styles.actionContainer}>
							<Text style={styles.actionText}>✅</Text>
						</View>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.actions}>
					<TouchableOpacity onPressOut={startEditing}>
						<View style={styles.actionContainer}>
							<Text style={styles.actionText}>✏</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.actionContainer}>
							<Text style={styles.actionText}>❌</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Todo;
