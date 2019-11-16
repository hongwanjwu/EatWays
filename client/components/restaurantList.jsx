import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const RestaurantList = props => (
  <View>
    {props.restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={`${restaurant}${i}`} />
    ))}
  </View>
);

export default RestaurantList;
