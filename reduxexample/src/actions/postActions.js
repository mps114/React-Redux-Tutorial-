import { NEW_POST } from './types';
/*
//dispatch kinda like promise and resolve?
export const fetchPosts = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json()) //Javascript promises. not entirely sure but can research more if needed
		.then(posts => 
			dispatch({
				type: FETCH_POSTS,
				payload: posts //data going to the reducer
			})
		); //adds the data to the state
};*/

//make this look better?
export const createPost = (postData) => dispatch => {
	//I believe to add to the posts 
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
	.then(res => res.json())
	.then(post => dispatch({
		type: NEW_POST,
		payload: post
	}));
};