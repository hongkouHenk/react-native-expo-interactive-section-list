import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Home from './Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: Platform.OS === 'ios' ? 44 : 0,
    backgroundColor: '#fff',
  },
});
