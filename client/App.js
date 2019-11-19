import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
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
    this.handleDisplayNearby = this.handleDisplayNearby.bind(this);
  }

  handleInputChange(name, text) {
    if (name === 'user') {
      text = text.toLowerCase();
    }
    this.setState({[name]: text});
  }

  handlePages(val) {
    const displayPlaces = val === 'displayPlaces';
    const displayRestaurants = val === 'displayRestaurants';
    const displayNav = val === 'nav';

    if (displayPlaces || displayRestaurants || displayNav) {
      this.setState({displayPlaces, displayRestaurants});
    }

    if (val === 'logOut') {
      const user = null;
      this.setState({loggedIn: false, user});
    }
  }

  handleSubmit(val) {
    const loggedIn = val === 'loggedIn';

    if (loggedIn && this.state.user) {
      request.getUserInfo(this.state.user, (places, restaurants) => {
        this.setState({loggedIn, places, restaurants});
      });
    }

    if (val === 'addRestaurant' && this.state.restaurant) {
      request.addRestaurant(
        this.state.user,
        this.state.restaurant,
        restaurants => {
          const restaurant = null;
          this.setState({restaurant, restaurants});
        }
      );
    }

    if (val === 'addPlace' && this.state.place) {
      request.addPlace(this.state.user, this.state.place, places => {
        const place = null;
        this.setState({place, places});
      });
    }
  }

  handleDisplayNearby(id, item) {
    const list = [...this.state[item]];
    list.forEach((ele, i) => {
      list[i].displayNearby = ele._id === id ? !list[i].displayNearby : false;
    });
    this.setState({[item]: list});
  }

  render() {
    return (
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF6E6'
        }}
      >
        <ScrollView>
          <View style={{marginTop: 100}}>
            {this.state.loggedIn ? (
              this.state.displayPlaces ? (
                <PlaceList
                  place={this.state.place}
                  places={this.state.places}
                  user={this.state.user}
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  handlePages={this.handlePages}
                  handleDisplayNearby={this.handleDisplayNearby}
                  displayPlaces={this.state.displayPlaces}
                />
              ) : this.state.displayRestaurants ? (
                <RestaurantList
                  restaurant={this.state.restaurant}
                  restaurants={this.state.restaurants}
                  user={this.state.user}
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  handlePages={this.handlePages}
                  handleDisplayNearby={this.handleDisplayNearby}
                  displayRestaurants={this.state.displayRestaurants}
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
        </ScrollView>
      </View>
    );
  }
}
