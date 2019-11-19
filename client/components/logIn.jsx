import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import style from './../style.js';

const LogIn = props => (
  <View style={style.logInContainer}>
    <Text style={style.title}>EatWays</Text>
    <View style={style.logIn}>
      <Text style={style.label}>Username:</Text>
      <TextInput
        style={style.input}
        onChangeText={text => props.handleInputChange('user', text)}
      />
      <TouchableOpacity
        style={style.logInbutton}
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
