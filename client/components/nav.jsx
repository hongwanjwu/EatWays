import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const Nav = props => (
  <View>
    <Text>Hello, {props.user}</Text>
    <Button title="Places" onPress={() => props.handlePress('displayPlaces')} />
    <Button
      title="Restaurants"
      onPress={() => props.handlePress('displayRestaurants')}
    />
  </View>
);

export default Nav;
