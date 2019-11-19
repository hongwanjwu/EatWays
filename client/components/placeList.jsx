import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import Place from './place.jsx';
import style from './../style.js';

const PlaceList = props => (
  <View style={{alignItems: 'center'}}>
    <View style={style.addContainer}>
      <TextInput
        style={style.input}
        value={props.place}
        placeholder="Add a place to your list"
        onChangeText={text => props.handleInputChange('place', text)}
      />
      <TouchableOpacity
        style={style.addButton}
        onPress={() => props.handleSubmit('addPlace')}
      >
        <Text style={style.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
    {props.places.map(place => (
      <Place
        place={place}
        user={props.user}
        key={place._id}
        displayPlaces={props.displayPlaces}
        handleDisplayNearby={props.handleDisplayNearby}
      />
    ))}
    <TouchableOpacity
      style={style.addButton}
      onPress={() => props.handlePages('nav')}
    >
      <Text style={style.buttonText}>Back</Text>
    </TouchableOpacity>
  </View>
);

export default PlaceList;
