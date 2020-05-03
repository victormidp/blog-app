import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
	switch (action.type) {
		case "get_blogposts":
			return action.payload;
		case "edit_blogpost":
			return state.map((blogPost) => {
				return blogPost.id === action.payload.id ? action.payload : blogPost;
			});
		case "delete_blogpost":
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return state;
	}
};

const getBlogPosts = (dispatch) => {
	return async () => {
		const reponse = await jsonServer.get("/blogposts");
		dispatch({ type: "get_blogposts", payload: reponse.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogposts', { title, content });
		if (callback) callback();
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({ type: "edit_blogpost", payload: { id, title, content } });
		if (callback) callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: "delete_blogpost", payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	BlogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
);
