import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState, useEffect, useRef} from 'react';
import {FadeInImage} from './FadeInImage';
import {IPokemonDetails} from '../interfaces/IPokemonResponse';
import ImageColors from 'react-native-image-colors';

interface Props {
  item: IPokemonDetails;
  onPress?: () => void;
  bgColor?: string;
}

const PokeCard: FC<Props> = ({item, bgColor}) => {
  return (
    <View style={{...styles.container, backgroundColor: bgColor || 'grey'}}>
      <Text style={styles.title}>
        {'#' + ' ' + item?.id + ' ' + item?.name}
      </Text>
      <FadeInImage uri={item?.picture || ''} style={styles.image} />
    </View>
  );
};

const ios: FC<Props> = ({onPress, item, bgColor}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <PokeCard item={item} bgColor={bgColor} />
    </TouchableOpacity>
  );
};

const android: FC<Props> = ({onPress, item, bgColor}) => {
  return (
    <View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('lightgrey', true, 35)}
        onPress={onPress}>
        <PokeCard item={item} bgColor={bgColor} />
      </TouchableNativeFeedback>
    </View>
  );
};

const Card: FC<Props> = ({item, onPress}) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(item.picture, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) {
        return;
      }
      switch (Platform.OS) {
        case 'ios':
          if (colors.platform === 'ios') {
            setBgColor(colors.background || 'grey');
          }
          break;
        case 'android':
          if (colors.platform === 'android') {
            setBgColor(colors.dominant || 'grey');
          }
          break;
        default:
          break;
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [bgColor, item.picture]);

  return (
    <>
      {Platform.OS === 'ios'
        ? ios({item, onPress, bgColor})
        : android({item, onPress, bgColor})}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    height: 120,
    width: 100,
  },
});
