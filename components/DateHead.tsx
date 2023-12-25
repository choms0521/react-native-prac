import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
});

function DateHead(props: {date: Date}) {
  const {date} = props;

  const {top} = useSafeAreaInsets();

  const formatDate = `${date.getFullYear()}월 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatDate}</Text>
      </View>
    </>
  );
}

DateHead.defaultProps = {
  date: new Date(),
};

export default DateHead;
