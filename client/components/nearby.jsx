import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NearbyItem from './nearbyItem.jsx';
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
  const item = props.place || props.restaurant;

  useEffect(() => {
    let subscribed = true;
    const queryList = props.place ? 'restaurants' : 'places';
    const address = item.address;
    request.getNearby(props.user, address, queryList, nearbyList => {
      if (subscribed) {
        setList(nearbyList);
      }
    });
    return () => (subscribed = false);
  }, [loading]);

  return (
    <View style={style.container}>
      <Text style={style.text}>Address: </Text>
      <Text style={style.textInfo}>{item.address}</Text>
      <Text style={style.text}>
        Near By {props.place ? 'Restaurants' : 'Places'}:
      </Text>
      {list.length > 0 ? (
        props.place ? (
          list.map(restaurant => (
            <NearbyItem restaurant={restaurant} key={restaurant._id} />
          ))
        ) : (
          list.map(place => <NearbyItem place={place} key={place._id} />)
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