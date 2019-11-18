import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TouchableHighlight} from 'react-native';
import Nearby from './nearby.jsx';

const Place = ({place, user, handleDisplayNearby}) => (
  <View>
    <TouchableHighlight onPress={() => handleDisplayNearby(place._id)}>
      <Text>{place.name}</Text>
    </TouchableHighlight>
    {place.displayNearby ? <Nearby place={place} user={user} /> : null}
  </View>
);

export default Place;
