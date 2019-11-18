import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogIn from './components/logIn.jsx';
import Nav from './components/nav.jsx';
import PlaceList from './components/placeList';
import RestaurantList from './components/restaurantList';
import request from './request.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      places: [],
      place: null,
      restaurants: [],
      restaurant: null,
      displayPlaces: false,
      displayRestaurants: false,
      loggedIn: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePages = this.handlePages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(name, text) {
    this.setState({[name]: text});
  }

  handlePages(val) {
    const displayPlaces = val === 'displayPlaces';
    const displayRestaurants = val === 'displayRestaurants';

    if (displayPlaces || displayRestaurants) {
      this.setState({displayPlaces, displayRestaurants});
    }
  }

  handleSubmit(val) {
    const logIn = val === 'loggedIn';

    if (logIn) {
      request.getUserInfo(this.state.user, (places, restaurants) => {
        this.setState({[val]: true, places, restaurants});
      });
    }

    if (val === 'addRestaurant') {
      request.addRestaurant(
        this.state.user,
        this.state.restaurant,
        restaurants => {
          const restaurant = null;
          this.setState({restaurant, restaurants});
        }
      );
    }

    if (val === 'addPlace') {
      request.addPlace(this.state.user, this.state.place, places => {
        const place = null;
        this.setState({place, places});
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {this.state.loggedIn ? (
          this.state.displayPlaces ? (
            <PlaceList
              places={this.state.places}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
          ) : this.state.displayRestaurants ? (
            <RestaurantList
              restaurants={this.state.restaurants}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            <Nav user={this.state.user} handlePages={this.handlePages} />
          )
        ) : (
          <LogIn
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </View>
    );
  }
}
