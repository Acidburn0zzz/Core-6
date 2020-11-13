import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { useScreenWidth } from '../../../utils/hooks/screenWidth';
import responsive from '../../../utils/responsive';

export default function useHomeNewsStyle() {
  const { colors } = useTheme();
  const screenWidth = useScreenWidth();

  return StyleSheet.create({
    container: {
      display: responsive(screenWidth, 'none', 'flex', 'flex'),
      marginTop: 20,
      paddingRight: 0,
    },
    scroll: {
      paddingRight: 20,
      maxHeight: 250,
    },
    separator: {
      paddingBottom: 20,
      marginBottom: 20,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
  });
}
