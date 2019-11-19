import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import style from './../style.js';

const Nav = props => (
  <View style={{marginTop: 150}}>
    <TouchableOpacity
      style={style.navButton}
      onPress={() => props.handlePages('displayPlaces')}
    >
      <Text style={style.navText}>Places</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.navButton}
      onPress={() => props.handlePages('displayRestaurants')}
    >
      <Text style={style.navText}>Restaurants</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.navButton}
      onPress={() => props.handlePages('logOut')}
    >
      <Text style={style.navText}>Log Out</Text>
    </TouchableOpacity>
  </View>
);

export default Nav;
