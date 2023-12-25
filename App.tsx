/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'white',
  },

  avoid: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: 'work1', done: true},
    {id: 2, text: 'work2', done: false},
    {id: 3, text: 'work3', done: false},
  ]);

  const handleInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos([...todos, todo]);
  };

  const handleToggle = id => {
    const nextTodos = todos.map(value =>
      value.id === id ? {...value, done: !value.done} : value,
    );

    setTodos(nextTodos);
  };

  const handleRemove = id => {
    const newTodos = todos.filter(value => value.id !== id);
    setTodos(newTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.safeView}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList
              onRemove={handleRemove}
              onToggle={handleToggle}
              todos={todos}
            />
          )}

          <AddTodo onInsert={handleInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
