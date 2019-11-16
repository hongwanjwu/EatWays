import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const Place = props => (
  <View>
    <Text>{props.restaurant.name}</Text>
  </View>
);

export default Place;
