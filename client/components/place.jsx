import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby.jsx';

const style = StyleSheet.create({
  item: {
    width: 200,
    backgroundColor: '#F2A391',
    borderRadius: 5,
    alignSelf: 'center',
    margin: 10
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  }
});

const Place = ({place, user, handleDisplayNearby, displayPlaces}) => (
  <View style={{alignSelf: 'center'}}>
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        handleDisplayNearby(place._id, 'places');
      }}
    >
      <Text style={style.text}>{place.name}</Text>
    </TouchableOpacity>
    {place.displayNearby ? <Nearby place={place} user={user} /> : null}
  </View>
);

export default Place;
