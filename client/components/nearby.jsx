import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import Restaurant from './restaurant.jsx';
import request from '../request.js';

const Nearby = props => {
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    let subscribed = true;
    request.getNearby(props.user, props.place.address, nearbyList => {
      if (subscribed) {
        setRestaurant(nearbyList);
      }
    });
    return () => (subscribed = false);
  }, []);

  return (
    <View>
      {restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} key={restaurant._id} />
      ))}
    </View>
  );
};

export default Nearby;
