import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import style from './../style.js';

const Item = props => {
  const item = props.place || props.restaurant;

  return (
    // <ScrollView
    //   contentContainerStyle={{
    //     flexGrow: 1
    //   }}
    // >
    <View style={style.itemContainer}>
      <Text style={style.buttonText}>{item.name}</Text>
      {item.rating ? (
        <Text style={style.buttonText}>Rating: {item.rating}</Text>
      ) : null}
      {item.distance ? (
        <Text style={style.buttonText}>Distance: {item.distance}</Text>
      ) : null}
    </View>
    // </ScrollView>
  );
};

export default Item;
