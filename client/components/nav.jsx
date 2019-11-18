import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const style = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center',
    margin: 20
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    padding: 5
  }
});

const Nav = props => (
  <View>
    <TouchableOpacity
      style={style.button}
      onPress={() => props.handlePages('displayPlaces')}
    >
      <Text style={style.text}>Places</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.button}
      onPress={() => props.handlePages('displayRestaurants')}
    >
      <Text style={style.text}>Restaurants</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.button}
      onPress={() => props.handlePages('logOut')}
    >
      <Text style={style.text}>Log Out</Text>
    </TouchableOpacity>
  </View>
);

export default Nav;
