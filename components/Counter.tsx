import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

type PropType = {
  count: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

function Counter(props: PropType) {
  const {count, handleIncrease, handleDecrease} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={handleIncrease} />
      <Button title="-1" onPress={handleDecrease} />
    </View>
  );
}

Counter.defaultPorps = {
  count: 0,
};

export default Counter;
