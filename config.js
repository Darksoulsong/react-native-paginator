import { StyleSheet } from 'react-native';

const buttonMain = {
  backgroundColor: '#fff',
  color: '#333',
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#ccc',
  margin: 8,
  width: 36,
  height: 36,
  lineHeight: 36,
  justifyContent: 'center',
  fontSize: 8,
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
};

export const showControls = false;
export const totalItems = 0;
export const activePage = 1;
export const itemsPerPage = 10;
export const pageRangeDisplayed = 3;

export const buttonStyles = {
  ...buttonMain,
};

export const buttonActiveStyles = {
  ...buttonMain,
  backgroundColor: 'blue',
  color: '#fff',
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: 'blue',
};

export const buttonControlStyles = {
  ...buttonMain,
  fontSize: 16,
  lineHeight: 36,
};

export const buttonAltStyles = {
  ...buttonMain,
  backgroundColor: 'transparent',
  color: '#000',
  width: 12,
  height: 36,
  lineHeight: 36,
  borderWidth: 0,
  fontSize: 18,
};

export const buttonDisabled = {
  ...buttonMain,
  backgroundColor: '#e1e1e1',
  fontSize: 12,
  lineHeight: 12,
};

export const disabled = false;

export const onChange = () => {};
