import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogPost } = useContext(BlogContext);

	const blogPost = state.find((blogPost) => blogPost.id === id);
	const initialValues = {
		title: blogPost.title,
		content: blogPost.content,
	};

	return (
		<BlogPostForm
			initialValues={initialValues}
			onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.pop())}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
