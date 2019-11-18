import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Restaurant from './restaurant.jsx';
import request from '../request.js';

const style = StyleSheet.create({
  container: {
    borderColor: '#3C4C59',
    borderRadius: 10,
    backgroundColor: '#F2E0D5'
  },
  text: {
    fontWeight: 'bold',
    color: '#3C4C59',
    paddingTop: 10,
    paddingLeft: 10
  },
  textNone: {
    color: '#3C4C59',
    padding: 10
  }
});

const loading = {
  name: 'loading...',
  _id: 'loading'
};

const Nearby = props => {
  const [restaurants, setRestaurant] = useState([loading]);

  useEffect(() => {
    let subscribed = true;
    request.getNearby(props.user, props.place.address, nearbyList => {
      if (subscribed) {
        setRestaurant(nearbyList);
      }
    });
    return () => (subscribed = false);
  }, [loading]);

  return (
    <View style={style.container}>
      <Text style={style.text}>Near By Restaurants:</Text>
      {restaurants.length > 0 ? (
        restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant._id} />
        ))
      ) : (
        <Text style={style.textNone}>
          None, go back to add more restaurants!
        </Text>
      )}
    </View>
  );
};

export default Nearby;
