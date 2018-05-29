//Posts.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //connects components with the redux store that was provided by the provider component
//import { fetchPosts } from '../actions/postActions.js';

class Posts extends Component {
/*
	componentWillMount() {
		this.props.fetchPosts();
	}*/

	//when it receives a new property from the state this will run
	componentWillReceiveProps(nextProps) {
		//check to see if new one was added
		//if so, add to the beginning of the posts
		//unshift adds to the beginning
		if(nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	//renders a list of post items 
	//first turn it into the const and then render that 
	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
				<p>-{post.date}-</p>
			</div>
			));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}

//so syntax errors go away
Posts.propTypes = {
	//fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
};


//posts because of default reducer
const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(mapStateToProps, {})(Posts);