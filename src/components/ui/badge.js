import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import App from '../../../App';

const Badge = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: AppColors.Neutral.White, fontSize: 12}}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Accent.Green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: 100,
    marginTop: 5,
  },
});

export default Badge;
