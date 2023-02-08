import {Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const Detail = ({
  route: {
    params: {color, item},
  },
}: Props) => {
  return (
    <View>
      <Text>{color + item.name}</Text>
    </View>
  );
};

export default Detail;
