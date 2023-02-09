import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IPokemonDetails} from '../interfaces/IPokemonResponse';
import Pokemon from '../screens/Pokemon';
import Detail from '../screens/Detail';

export type RootStackParams = {
  Pokemon: {item: IPokemonDetails};
  Detail: {item: IPokemonDetails};
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Navigator;
