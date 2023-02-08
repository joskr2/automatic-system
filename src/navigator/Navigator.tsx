import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IPokemonDetails} from '../interfaces/IPokemonResponse';
// import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';
import Detail from '../screens/Detail';

export type RootStackParams = {
  // Home: undefined;
  Pokemon: {item: IPokemonDetails; color: string};
  Detail: {item: IPokemonDetails; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Navigator;
