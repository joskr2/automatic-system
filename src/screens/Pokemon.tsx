import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../theme/default';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigator/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';

const Pokemon = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.globalMargin}>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id.toString()}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() =>
              navigation.navigate('Detail', {
                item,
                color: 'red',
              })
            }
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
            }}>
            Pokemon
          </Text>
        }
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.activityIndicatorStyle}
            size={20}
            color="grey"
          />
        }
      />
    </View>
  );
};

export default Pokemon;
