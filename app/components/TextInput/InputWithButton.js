import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {buttonText, onPress, editable = true } = props;

  const underlayColor = color(styles.$buttonBAckgroundColorBase).darken(
    styles.$buttonBAckgroundColorModifier
  );

  const containerStyles = [styles.container];
  if(editable === false){
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText]
  if(props.textColor) {
    buttonTextStyles.push({ color: props.textColor })
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border}></View>
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
    </View>
  )
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}
export default InputWithButton;