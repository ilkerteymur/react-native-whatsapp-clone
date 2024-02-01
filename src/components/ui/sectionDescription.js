import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const SectionDescription = props => {
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
    fontSize: 14,
    color: AppColors.Neutral.Gray,
    textAlign: 'center',
    margin: 10,
  },
});

export default SectionDescription;
