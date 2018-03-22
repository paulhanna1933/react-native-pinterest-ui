import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pin from './components/Pin';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
