import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import Restaurant from './restaurant.jsx';
import style from './../style.js';

const RestaurantList = props => (
  <View style={{alignItems: 'center'}}>
    <View style={style.addContainer}>
      <TextInput
        style={style.input}
        value={props.restaurant}
        placeholder="Add a restaurant to your list"
        onChangeText={text => props.handleInputChange('restaurant', text)}
      />
      <TouchableOpacity
        style={style.addButton}
        onPress={() => props.handleSubmit('addRestaurant')}
      >
        <Text style={style.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
    {props.restaurants.map(restaurant => (
      <Restaurant
        restaurant={restaurant}
        user={props.user}
        key={restaurant._id}
        displayRestaurants={props.displayRestaurants}
        handleDisplayNearby={props.handleDisplayNearby}
      />
    ))}
    <TouchableOpacity
      style={style.addButton}
      onPress={() => props.handlePages('nav')}
    >
      <Text style={style.buttonText}>Back</Text>
    </TouchableOpacity>
  </View>
);

export default RestaurantList;
