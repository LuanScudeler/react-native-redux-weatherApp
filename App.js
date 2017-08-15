import React, { Component } from 'react';
import View from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import WeatherApp from './containers/WeatherApp';
import { weatherReducers } from './reducers/weatherReducers'


const store = createStore(weatherReducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    );
  }
}

