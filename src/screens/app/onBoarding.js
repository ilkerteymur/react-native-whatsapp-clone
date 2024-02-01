import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import Opening from '../../assets/images/opening.svg';
import {useNavigation} from '@react-navigation/native';
import {VERIFICATIONPHONENUMBER} from '../../utils/routes';

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="What's Up" />
      </View>
      <View style={styles.body}>
        <Opening />
        <SectionDescription text="Let's talk with your friends and family wherever and whenever" />
      </View>
      <View>
        <Button
          title="Continue with phone"
          size="medium"
          onPress={() => navigation.navigate(VERIFICATIONPHONENUMBER)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Brand.White,
    padding: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    paddingTop: 30,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default OnBoarding;
