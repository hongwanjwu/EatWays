import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby.jsx';
import style from './../style.js';

const Place = ({place, user, handleDisplayNearby, handleDelete}) => (
  <View style={{alignSelf: 'center'}}>
    <View style={style.rowContainer}>
      <TouchableOpacity
        style={style.itemContainer}
        onPress={() => {
          handleDisplayNearby(place._id, 'places');
        }}
      >
        <Text style={style.buttonText}>{place.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => {
          handleDelete(place._id, 'places');
        }}
      >
        <Text style={style.deleteText}>Remove</Text>
      </TouchableOpacity>
    </View>
    {place.displayNearby ? (
      <Nearby place={place} user={user} handleDelete={handleDelete} />
    ) : null}
  </View>
);

export default Place;
