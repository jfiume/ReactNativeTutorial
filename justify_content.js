import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      // try setting 'justifyContent' to 'center'
      // try setting 'flexDirection' to 'row'
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
  );
  }
}
