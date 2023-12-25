import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';

function Button() {
  return (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
}

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  const handlePlus = () => {
    onInsert(text);
    setText('');

    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="write to do "
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handlePlus}
        returnKeyType="done"
      />
      {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5} onPress={handlePlus}>
          <Button />
        </TouchableOpacity>
      ) : (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback onPress={handlePlus}>
            <Button />
          </TouchableNativeFeedback>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    borderRadius: 24,
    overflow: 'hidden',
  },
});

export default AddTodo;
