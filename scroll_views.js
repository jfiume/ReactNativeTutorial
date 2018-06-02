import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:108}}>Scroll me plz</Text>
        <Text style={{fontSize:200}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:96}}>What's the best</Text>
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Text style={{fontSize:96}}>React Native</Text>
      </ScrollView>
    );
  }
}
