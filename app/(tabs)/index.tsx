import React from 'react';
import { StyleSheet, View } from 'react-native';

import Usuario from '@/components/usuario';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Usuario nome="Ana" />
      <Usuario nome="Carlos" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});