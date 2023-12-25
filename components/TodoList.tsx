import React from 'react';

import {FlatList, View, Text, StyleSheet} from 'react-native';

import TodoItem from './TodoItem';

function TodoList({onRemove, onToggle, todos}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem onRemove={onRemove} onToggle={onToggle} {...item} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
