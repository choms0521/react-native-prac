import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },

  rounded: {
    borderRadius: 16,
  },

  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

type SizeValue = {
  width: number;
  height: number;
};

type SizesType = {
  [key: string]: SizeValue;
};

const sizes: SizesType = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

function Box(props: {rounded: boolean; size: string; color: string}) {
  const {rounded, size, color} = props;
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
}

Box.defaultProps = {
  rounded: false,
  size: 'small',
  color: 'black',
};

export default Box;
