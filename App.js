import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPlatformOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>110719009 劉博宇wk1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

