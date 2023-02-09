import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import usePokemon from '../hooks/usePokemon';
import {FadeInImage} from './FadeInImage';

interface Props {
  id: string;
}
const DetailSection: FC<Props> = ({id}) => {
  const {isLoading, singlePokemon} = usePokemon(id);

  function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      <View style={styles.container}>
        <Text style={styles.title}>Types</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <View style={styles.typesContainer}>
            {singlePokemon?.types?.map(type => (
              <Text key={type?.type?.name} style={styles.type}>
                {type?.type?.name}
              </Text>
            ))}
          </View>
        ) : (
          <Text>No data </Text>
        )}
        <Text style={styles.title}>Weight</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <Text
            style={styles.description}>{`${singlePokemon?.weight} kg`}</Text>
        ) : (
          <Text>No data </Text>
        )}
        <Text style={styles.title}>Sprites</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            style={styles.sprites}>
            <FadeInImage
              uri={singlePokemon?.sprites?.front_default}
              style={styles.sprite}
            />
            <FadeInImage
              uri={singlePokemon?.sprites?.back_default}
              style={styles.sprite}
            />
            <FadeInImage
              uri={singlePokemon?.sprites?.front_shiny}
              style={styles.sprite}
            />
            <FadeInImage
              uri={singlePokemon?.sprites?.back_shiny}
              style={styles.sprite}
            />
          </ScrollView>
        ) : (
          <Text>No data </Text>
        )}
        <Text style={styles.title}>Abilities</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <View style={styles.typesContainer}>
            {singlePokemon?.abilities?.map(({ability}) => (
              <Text key={ability?.name} style={styles.type}>
                {ability?.name}
              </Text>
            ))}
          </View>
        ) : (
          <Text>No data </Text>
        )}
        <Text style={styles.title}>Moves</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <View style={styles.typesContainer}>
            {singlePokemon?.moves?.map(({move}) => (
              <Text key={move?.name} style={styles.type}>
                {move?.name}
              </Text>
            ))}
          </View>
        ) : (
          <Text>No data </Text>
        )}
        <Text style={styles.title}>Stats</Text>
        {isLoading ? (
          <ActivityIndicator size={45} color=" grey " />
        ) : !isEmpty(singlePokemon) && singlePokemon !== undefined ? (
          <View style={styles.typesContainer}>
            {singlePokemon?.stats?.map(({stat, base_stat}, i) => (
              <Text key={i} style={styles.type}>
                {`${stat.name} : ${base_stat}`}
              </Text>
            ))}
          </View>
        ) : (
          <Text>No data </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    marginTop: 10,
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  type: {
    backgroundColor: '#F3F3F3',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 20,
  },
  sprites: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sprite: {
    backgroundColor: '#F3F3F3',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    width: 100,
    height: 100,
  },
});
