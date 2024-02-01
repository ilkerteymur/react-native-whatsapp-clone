import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const SectionTitle = props => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    color: AppColors.Neutral.Black,
    fontWeight: '600',
  },
});

export default SectionTitle;
