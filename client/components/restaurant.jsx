import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

const Place = ({restaurant}) => (
  <View>
    <Text>{restaurant.name}</Text>
    <Text>{restaurant.rating}</Text>
  </View>
);

export default Place;
