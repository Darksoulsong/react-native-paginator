import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const Button = (
  disabled,
  onPress,
  styles,
  children,
) => (
  <TouchableWithoutFeedback
    disabled={disabled}
    onPress={onPress}
  >
    {
      styles && (
        <View style={styles}>
          { children }
        </View>
      )
    }

    {
      !styles && (
        { children }
      )
    }
  </TouchableWithoutFeedback>
);

export default Button;
