import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontSize: 24,

    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require('../assets/images/young_and_happy.png')}
      />

      <Text style={styles.description}>nothing to do!!!</Text>
    </View>
  );
}

export default Empty;
