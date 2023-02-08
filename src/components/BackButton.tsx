import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  onPress: () => void;
}
const Ios: FC<Props> = ({onPress}) => {
  const {top} = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{...styles.backButton, top: top + 5}}>
      <Icon name="arrow-back-outline" color="white" size={30} />
    </TouchableOpacity>
  );
};

const Android: FC<Props> = ({onPress}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('lightgrey', true, 35)}
        onPress={onPress}
        style={{...styles.backButton, top: top + 5}}>
        <Icon name="arrow-back-outline" color="white" size={30} />
      </TouchableNativeFeedback>
    </View>
  );
};
const BackButton: FC<Props> = ({onPress}) => {
  return <>{Platform.OS === 'ios' ? Ios({onPress}) : Android({onPress})}</>;
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
  },
});
