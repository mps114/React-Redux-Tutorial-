import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'; //takes the store

import Posts from './components/Posts.js'
import PostForm from './components/Postform.js'

import store from './store.js'

//const store = createStore(() => [], {}, applyMiddleware());

//simply setting up what the webpage looks like
//putting in both of the components as well which do the work
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Posts</h1>
        </header>
        <PostForm />
        <hr /> 
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
