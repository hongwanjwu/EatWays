import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const LogIn = props => (
  <View>
    <Text>Log in:</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Enter your username here!"
      onChangeText={text => props.handleInputChange('user', text)}
    />
    <Button title="Log in" onPress={() => props.handlePress('loggedIn')} />
  </View>
);

export default LogIn;
