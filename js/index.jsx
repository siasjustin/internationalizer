import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Match } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import "babel-polyfill";
import actions from './actions';


// components
import App from './components/app';

// page components
import HomePage from './components/homePage/HomePage';

function userRedirect(nextState, replace) {
  var defaultLanguage = 'en-US';
  var redirectPath = defaultLanguage + '/' + nextState.location.pathname + '/'
  replace({
    pathname: redirectPath,
  })
};


const store = configureStore();

render((
  	<Provider store={store}>
  	  <Router history={browserHistory}>
  	     <Route path="/" component={App}>
  	      	<IndexRoute component={HomePage} />
        </Route>
        <Route path="/:locale">
          <IndexRoute component={HomePage} />
        </Route>
      <Route path="*" onEnter={userRedirect} />
  	  </Router> 
  	</Provider>   
), document.getElementById('main'));