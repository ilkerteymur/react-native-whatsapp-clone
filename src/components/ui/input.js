import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const Input = props => {
  const {icon} = props;
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
        source={icon}
      />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: AppColors.Neutral.Gray,
  },
  input: {
    backgroundColor: AppColors.Neutral.White,
    paddingLeft: 10,
    flex: 1,
  },
});

export default Input;
