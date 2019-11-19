import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    padding: 8,
    paddingBottom: 0
  },
  textInfo: {
    color: '#3C4C59',
    padding: 8
  }
});

const loading = {
  name: 'loading...',
  _id: 'loading'
};

const Nearby = props => {
  const [list, setList] = useState([loading]);

  useEffect(() => {
    let subscribed = true;
    const item = props.place || props.restaurant;
    const address = item.address;
    request.getNearby(props.user, address, nearbyList => {
      if (subscribed) {
        setList(nearbyList);
      }
    });
    return () => (subscribed = false);
  }, [loading]);

  return (
    <View style={style.container}>
      <Text style={style.text}>Address: </Text>
      <Text style={style.textInfo}>{props.place.address}</Text>
      <Text style={style.text}>
        Near By {props.place ? 'Restaurants' : 'Places'}:
      </Text>
      {list.length > 0 ? (
        props.place ? (
          list.map(restaurant => (
            <Restaurant restaurant={restaurant} key={restaurant._id} />
          ))
        ) : (
          list.map(place => <Place place={place} key={place._id} />)
        )
      ) : (
        <Text style={style.textInfo}>
          None, go back to add more {props.place ? 'restaurants' : 'places'}!
        </Text>
      )}
    </View>
  );
};

export default Nearby;
