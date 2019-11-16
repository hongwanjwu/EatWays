import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './components/logIn.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      places: null,
      restaurants: null,
      displayPlaces: false,
      displayRestaurants: false,
      loggedIn: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleInputChange(name, text) {
    this.setState({ [name]: text });
  }

  handlePress(val) {
    this.setState({ [val]: true });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.loggedIn ? (
          <Text>Hello, {this.state.user}</Text>
        ) : (
          <LogIn
            handleInputChange={this.handleInputChange}
            handlePress={this.handlePress}
          />
        )}
      </View>
    );
  }
}
