import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import Restaurant from './restaurant.jsx';

const style = StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center',
    margin: 10
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#3C4C59',
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  }
});

const RestaurantList = props => (
  <View>
    <View style={style.addContainer}>
      <TextInput
        style={style.input}
        placeholder="Add a restaurant to your list"
        onChangeText={text => props.handleInputChange('restaurant', text)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => props.handleSubmit('addRestaurant')}
      >
        <Text style={style.text}>Add</Text>
      </TouchableOpacity>
    </View>
    {props.restaurants.map(restaurant => (
      <Restaurant restaurant={restaurant} key={restaurant._id} />
    ))}
    <TouchableOpacity
      style={style.button}
      onPress={() => props.handlePages('nav')}
    >
      <Text style={style.text}>Back</Text>
    </TouchableOpacity>
  </View>
);

export default RestaurantList;
