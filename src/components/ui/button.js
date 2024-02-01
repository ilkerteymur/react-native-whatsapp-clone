import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const Button = props => {
  const {size, status = 'primary', appearance = 'filled', icon, title} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        size == 'medium'
          ? styles.mediumButtonContainer
          : styles.largeButtonContainer,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Accent.Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 3,
  },
  largeButtonContainer: {
    padding: 20,
  },
  mediumButtonContainer: {
    padding: 15,
  },
  smallButtonContainer: {
    padding: 5,
  },

  title: {
    color: AppColors.Brand.White,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Button;
