import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby';
import style from './../style.js';

const Restaurant = ({restaurant, handleDisplayNearby, user, handleDelete}) => (
  <View>
    <View style={style.rowContainer}>
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
            <Text style={style.buttonText}>
              Distance: {restaurant.distance}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => {
          handleDelete(restaurant._id, 'restaurants');
        }}
      >
        <Text style={style.deleteText}>Remove</Text>
      </TouchableOpacity>
    </View>
    {restaurant.displayNearby ? (
      <Nearby restaurant={restaurant} user={user} handleDelete={handleDelete} />
    ) : null}
  </View>
);

export default Restaurant;
