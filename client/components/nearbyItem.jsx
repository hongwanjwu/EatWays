import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

const Item = props => {
  const item = props.place || props.restaurant;

  return (
    <View style={style.container}>
      <Text style={style.text}>{item.name}</Text>
      {item.rating ? (
        <Text style={style.text}>Rating: {item.rating}</Text>
      ) : null}
      {item.distance ? (
        <Text style={style.text}>Distance: {item.distance}</Text>
      ) : null}
    </View>
  );
};

export default Item;
