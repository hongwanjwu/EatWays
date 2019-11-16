import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './components/logIn.jsx';
import Nav from './components/nav.jsx';
import PlaceList from './components/placeList';
import RestaurantList from './components/restaurantList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      places: ['Paris'],
      restaurants: ['Happy Lemon'],
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
    const logIn = val === 'loggedIn';
    const displayPlaces = val === 'displayPlaces';
    const displayRestaurants = val === 'displayRestaurants';

    if (logIn) {
      this.setState({ [val]: true });
    }
    if (displayPlaces || displayRestaurants) {
      this.setState({ displayPlaces, displayRestaurants });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.loggedIn ? (
          this.state.displayPlaces ? (
            <PlaceList places={this.state.places} />
          ) : this.state.displayRestaurants ? (
            <RestaurantList restaurants={this.state.restaurants} />
          ) : (
            <Nav user={this.state.user} handlePress={this.handlePress} />
          )
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
