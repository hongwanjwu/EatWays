import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'space-around'
  },
  main: {
    backgroundColor: '#F2E0D5',
    height: 150,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3C4C59'
  },
  label: {
    fontSize: 20,
    color: '#3C4C59'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#3C4C59',
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    width: 50,
    backgroundColor: '#D98982',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'center'
  }
});

const LogIn = props => (
  <View style={style.container}>
    <Text style={style.title}>EatWays</Text>
    <View style={style.main}>
      <Text style={style.label}>Username:</Text>
      <TextInput
        style={style.input}
        onChangeText={text => props.handleInputChange('user', text)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => props.handleSubmit('loggedIn')}
      >
        <Text style={{color: 'white', alignSelf: 'center', padding: 5}}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default LogIn;
