import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  container: {
    width: 200,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#F2A391',
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  }
});

const Restaurant = ({restaurant}) => (
  <View style={style.container}>
    <Text style={style.text}>{restaurant.name}</Text>
    {restaurant.rating ? (
      <Text style={style.text}>Rating: {restaurant.rating}</Text>
    ) : null}
    {restaurant.distance ? (
      <Text style={style.text}>Distance: {restaurant.distance}</Text>
    ) : null}
  </View>
);

export default Restaurant;
