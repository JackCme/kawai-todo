import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	StatusBar,
	TextInput,
	Dimensions,
	ScrollView
} from "react-native";
import Todo from "./Todo";

// const instructions = Platform.select({
// 	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
// 	android:
// 		"Double tap R on your keyboard to reload,\n" +
// 		"Shake or press menu button for dev menu"
// });

const { height, width } = Dimensions.get("window");

const App = () => {
	const [newTodo, setNewTodo] = React.useState("");
	const handleChange = text => {
		setNewTodo(text);
	};
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Text style={styles.title}>Kawai To Do</Text>
			<View style={styles.card}>
				<TextInput
					style={styles.input}
					placeholder={"New To Do"}
					value={newTodo}
					onChangeText={handleChange}
					placeholderTextColor={"#999"}
					returnKeyType={"done"}
					autoCorrect={false}
				/>
				<ScrollView contentContainerStyle={styles.todos}>
					<Todo text={"Hello I'm Todo"} />
				</ScrollView>
			</View>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F23657"
	},
	title: {
		color: "white",
		fontSize: 30,
		marginTop: 50,
		marginBottom: 30,
		fontWeight: "200"
	},
	card: {
		backgroundColor: "white",
		flex: 1,
		width: width - 25,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		...Platform.select({
			ios: {
				shadowColor: "rgb(50, 50, 50)",
				shadowOpacity: 0.5,
				shadowRadius: 5,
				shadowOffset: {
					height: -1,
					width: 0
				}
			},
			android: {
				elevation: 3
			}
		})
	},
	input: {
		padding: 20,
		borderBottomColor: "#bbb",
		borderBottomWidth: 1,
		fontSize: 25
	},
	todos: {
		alignItems: "center"
	}
});
