import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Text>IndexScreen</Text>
			<Button onPress={addBlogPost} title="Add post" />
			<FlatList
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate("Show", { id: item.id })}
						>
							<View style={styles.rowStyle}>
								<Text style={styles.titleStyle}>{item.title}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather name="trash" style={styles.iconStyle} />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
				data={state}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	rowStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderColor: "gray",
		borderBottomWidth: 1,
	},
	titleStyle: {
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 20,
	},
});

export default IndexScreen;
