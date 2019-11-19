import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import NearbyItem from './nearbyItem.jsx';
import request from '../request.js';
import style from './../style.js';

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
    <View style={style.nearbyContainer}>
      <Text style={style.labelText}>Address: </Text>
      <Text style={style.infoText}>{item.address}</Text>
      <Text style={style.labelText}>
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
        <Text style={style.infoText}>
          None, go back to add more {props.place ? 'restaurants' : 'places'}!
        </Text>
      )}
    </View>
  );
};

export default Nearby;
