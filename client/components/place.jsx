import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

const Place = ({place}) => (
  <View>
    <Text>{place.name}</Text>
  </View>
);

export default Place;
