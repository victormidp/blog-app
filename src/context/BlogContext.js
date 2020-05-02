import React, { createContext, useState, useReducer } from 'react';
import createDataContext from './createDataContext';


const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                { title: `Blog post #${state.length+1}` }
            ];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
};

export const { Context, Provider } = createDataContext(
    BlogReducer,
    { addBlogPost },
    []
);