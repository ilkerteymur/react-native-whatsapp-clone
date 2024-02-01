import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import {screenHeight} from '../../utils/constants';

const Header = ({left, right, body}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.body}>{body}</View>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Brand.White,
    minHeight: screenHeight / 14,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  left: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
});

export default Header;
