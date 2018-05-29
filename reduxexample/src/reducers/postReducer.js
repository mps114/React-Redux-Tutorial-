//evaluate any actions that are committed - fetching our post and createing a new post

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
	items: [], //the posts that come in from our fetch action
	item: {} //the single post that we add 
}

//evaluates what type of action we are dealing with 
export default function(state = initialState, action) {
	switch(action.type) {
		/*
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};*/
		case NEW_POST:
			return {
				...state,
				item: action.payload
			}
		default: 
			return state;

	}
}