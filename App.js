import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import RootComponent from './src/views/index';

// const App: () => Node = () => {
const App = Node = () => {
  const isDarMode = useColorScheme() === 'dark';

  return (
    <RootComponent />
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;