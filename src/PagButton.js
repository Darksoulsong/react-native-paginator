import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const Button = ({
  disabled,
  onPress,
  styles,
  children,
}) => (
  <TouchableWithoutFeedback
    disabled={disabled}
    onPress={onPress}
  >
    <View style={styles}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default Button;
