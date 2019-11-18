import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

const Nav = props => (
  <View>
    <Text>Hello, {props.user}</Text>
    <Button title="Places" onPress={() => props.handlePages('displayPlaces')} />
    <Button
      title="Restaurants"
      onPress={() => props.handlePages('displayRestaurants')}
    />
  </View>
);

export default Nav;
