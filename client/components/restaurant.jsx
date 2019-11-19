import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Nearby from './nearby';

const style = StyleSheet.create({
  container: {
    width: 200,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#F2A391',
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  }
});

const Restaurant = ({
  restaurant,
  handleDisplayNearby,
  user,
  displayRestaurants
}) => (
  <View style={style.container}>
    <TouchableOpacity
      onPress={() => {
        if (displayRestaurants) {
          handleDisplayNearby(restaurant._id, 'restaurants');
        }
      }}
    >
      <Text style={style.text}>{restaurant.name}</Text>
      {restaurant.rating ? (
        <Text style={style.text}>Rating: {restaurant.rating}</Text>
      ) : null}
      {restaurant.distance ? (
        <Text style={style.text}>Distance: {restaurant.distance}</Text>
      ) : null}
    </TouchableOpacity>
    {restaurant.displayNearby ? (
      <Nearby restaurant={restaurant} user={user} />
    ) : null}
  </View>
);

export default Restaurant;
