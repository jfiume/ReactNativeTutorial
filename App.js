/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWorldApp from './HelloWorld';
import Bananas from './bananas';
import LotsOfGreetings from './hello_name';
import Blink from './blink';
import LotsOfStyles from './lots_of_styles';
import FixedDimensionsBasics from './fixed_dimensions';
import FlexDirectionBasics from './flex_direction';
import JustifyContent from './justify_content';
import AlignItemsBasics from './align_items';
import PizzaTranslator from './text_input';
import ButtonBasics from './button_basics';
import Touchables from './touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './scroll_views';
import FlatListBasics from './flat_list';
import SectionListBasics from './section_list';
import FetchExample from './fetch.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return ([
      <FetchExample/>,
      // <SectionListBasics/>,
      // <FlatListBasics/>,
      // <IScrolledDownAndWhatHappenedNextShockedMe/>,
      // <Touchables/>,
      // <ButtonBasics/>,
      // <PizzaTranslator/>,
      // <AlignItemsBasics/>,
      // <JustifyContent/>,
      // <FlexDirectionBasics/>,
      // <FixedDimensionsBasics/>,
      // <Bananas />,
      // <LotsOfStyles />
      // <LotsOfGreetings />,
      // <Blink />
      // <HelloWorldApp style={styles.hello}/>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    ]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  hello: {
    marginTop: 10
  }
});
