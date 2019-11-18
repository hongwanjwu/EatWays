import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Place from './place.jsx';

const style = StyleSheet.create({
  button: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center'
  }
});

const PlaceList = props => (
  <View>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Add a place to your list"
      onChangeText={text => props.handleInputChange('place', text)}
    />
    <Button title="Add" onPress={() => props.handleSubmit('addPlace')} />
    {props.places.map(place => (
      <Place
        place={place}
        user={props.user}
        key={place._id}
        handleDisplayNearby={props.handleDisplayNearby}
      />
    ))}
    <Button title="back" onPress={() => props.handlePages('nav')} />
  </View>
);

export default PlaceList;
