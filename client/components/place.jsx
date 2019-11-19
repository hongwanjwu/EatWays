import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby.jsx';
import style from './../style.js';

const Place = ({place, user, handleDisplayNearby, displayPlaces}) => (
  <View style={{alignSelf: 'center'}}>
    <TouchableOpacity
      style={style.itemContainer}
      onPress={() => {
        handleDisplayNearby(place._id, 'places');
      }}
    >
      <Text style={style.buttonText}>{place.name}</Text>
    </TouchableOpacity>
    {place.displayNearby ? <Nearby place={place} user={user} /> : null}
  </View>
);

export default Place;
