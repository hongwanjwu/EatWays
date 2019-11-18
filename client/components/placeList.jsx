import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Place from './place.jsx';

const PlaceList = props => (
  <View>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Add a place to your list"
      onChangeText={text => props.handleInputChange('place', text)}
    />
    <Button title="Add" onPress={() => props.handleSubmit('addPlace')} />
    {props.places.map(place => (
      <Place place={place} key={place._id} />
    ))}
  </View>
);

export default PlaceList;