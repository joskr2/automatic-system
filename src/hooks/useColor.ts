import {Platform} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import ImageColors from 'react-native-image-colors';

const useColor = (picture: string) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(picture, {fallback: 'grey'}).then(colors => {
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
  }, [bgColor, picture]);

  return bgColor;
};

export default useColor;
