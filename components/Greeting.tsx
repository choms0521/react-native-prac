import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props: {name: string}): React.JSX.Element {
  const {name} = props;
  return (
    <View>
      <Text>function component {name}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'cho',
};

export default Greeting;
