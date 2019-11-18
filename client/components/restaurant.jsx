import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

const Restaurant = ({restaurant}) => (
  <View>
    <Text>{restaurant.name}</Text>
    <Text>{restaurant.rating}</Text>
    {restaurant.distance ? <Text>{restaurant.distance}</Text> : null}
  </View>
);

export default Restaurant;
