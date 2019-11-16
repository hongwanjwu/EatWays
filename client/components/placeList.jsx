import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import Place from './place.jsx';

const PlaceList = props => (
  <View>
    {props.places.map((place, i) => (
      <Place place={place} key={`${place}${i}`} />
    ))}
  </View>
);

export default PlaceList;
