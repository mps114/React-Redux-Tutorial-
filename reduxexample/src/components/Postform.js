//Postform.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions.js';


class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			date: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	//whenever something is typed in
	//e.target.name is title or body depending on what is being typed in
	//e.target.value is the value typed into that target name
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	//when submit is clicked (type for button = 'submit')
	onSubmit(e) {
		e.preventDefault();

		const post = { //title and body is now in the state so can just grab from there
			title: this.state.title, 
			body: this.state.body,
			date: this.state.date
		}

		//Call action
		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<br />
						<input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
					</div>
					<br />
					<div>
						<label>Body: </label>
						<br />
						<textarea name="body" onChange={this.onChange} value={this.state.body}/>
					</div>
					<br />
					<div>
						<label>Date: </label>
						<br />
						<input type="text" name="date" onChange={this.onChange} value={this.state.date}/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
			);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);