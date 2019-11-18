import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Restaurant from './restaurant.jsx';

const RestaurantList = props => (
  <View>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Add a restaurant to your list"
      onChangeText={text => props.handleInputChange('restaurant', text)}
    />
    <Button title="Add" onPress={() => props.handleSubmit('addRestaurant')} />
    {props.restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant._id} />
    ))}
  </View>
);

export default RestaurantList;
