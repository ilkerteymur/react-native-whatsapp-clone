import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import {screenHeight, screenWidth} from '../../utils/constants';

const FloatActionButton = props => {
  const {icon} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
          tintColor: AppColors.Brand.White,
        }}
        source={icon}
      />
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
    position: 'absolute',
    zIndex: 99,
    bottom: 20,
    right: 20,
    width: screenWidth / 6,
    height: screenWidth / 6,
  },
});

export default FloatActionButton;
