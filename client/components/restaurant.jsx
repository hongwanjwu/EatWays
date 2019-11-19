import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby';
import style from './../style.js';

const Restaurant = ({restaurant, handleDisplayNearby, user}) => (
  <View>
    <View style={style.itemContainer}>
      <TouchableOpacity
        style={{justifyContent: 'space-between'}}
        onPress={() => {
          handleDisplayNearby(restaurant._id, 'restaurants');
        }}
      >
        <Text style={style.buttonText}>{restaurant.name}</Text>
        {restaurant.rating ? (
          <Text style={style.buttonText}>Rating: {restaurant.rating}</Text>
        ) : null}
        {restaurant.distance ? (
          <Text style={style.buttonText}>Distance: {restaurant.distance}</Text>
        ) : null}
      </TouchableOpacity>
    </View>
    {restaurant.displayNearby ? (
      <Nearby restaurant={restaurant} user={user} />
    ) : null}
  </View>
);

export default Restaurant;
