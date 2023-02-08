import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import useColor from '../hooks/useColor';
import BackButton from '../components/BackButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const Detail = ({
  navigation,
  route: {
    params: {item},
  },
}: Props) => {
  const color = useColor(item?.picture);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <Text style={{...styles.text, top: top + 5}}>
        {`#${item.id}  ${item.name.charAt(0).toUpperCase()}${item.name.slice(
          1,
        )}`}
      </Text>
      <FadeInImage uri={item.picture} style={styles.image} />
      <BackButton onPress={() => navigation.pop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    zIndex: 999,
    elevation: 9,
    alignItems: 'center',
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    bottom: -50,
  },
});

export default Detail;
