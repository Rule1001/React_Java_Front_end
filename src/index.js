import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import PropertiesList from './components/propertiesList.js';
import PropertiesPage from './components/PropertiesPage.js';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={PropertiesList} />
          <Route path='/properties/:properties_id' component={PropertiesPage} />
        </Switch>
      </App>
    </Router>
  </Provider>, document.getElementById('root'));