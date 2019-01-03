import { StyleSheet } from 'react-native';
import * as Config from './config';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  item: Config.buttonStyles,
  itemControl: Config.buttonControlStyles,
  itemAlt: Config.buttonAltStyles,
  itemActive: Config.buttonActiveStyles,
  itemDisabled: Config.buttonDisabled,
});

export default styles;
