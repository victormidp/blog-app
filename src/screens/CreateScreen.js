import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(BlogContext);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const { inputStyle, labelStyle } = styles;

	return (
		<View>
			<Text style={labelStyle}>Enter Title</Text>
			<TextInput style={inputStyle} value={title} onChangeText={setTitle} />
			<Text style={labelStyle}>Enter Content</Text>
			<TextInput style={inputStyle} value={content} onChangeText={setContent} />
			<Button
				title="Save Post"
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate("Index");
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	labelStyle: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});

export default CreateScreen;
