import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import Place from './place.jsx';

const style = StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center',
    margin: 10
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#3C4C59',
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    padding: 5
  }
});

const PlaceList = props => (
  <View>
    <View style={style.addContainer}>
      <TextInput
        style={style.input}
        placeholder="Add a place to your list"
        onChangeText={text => props.handleInputChange('place', text)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => props.handleSubmit('addPlace')}
      >
        <Text style={style.text}>Add</Text>
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
      style={style.button}
      onPress={() => props.handlePages('nav')}
    >
      <Text style={style.text}>Back</Text>
    </TouchableOpacity>
  </View>
);

export default PlaceList;
