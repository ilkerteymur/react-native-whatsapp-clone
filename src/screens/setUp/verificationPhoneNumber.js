import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {SETUPNAME} from '../../utils/routes';
import Input from '../../components/ui/input';

const VerificationPhoneNumber = () => {
  const [countryCode, setCountryCode] = useState('Turkey (+90)');
  const [phone, setPhone] = useState('05055555555');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Enter your phone number" />
        <SectionDescription text="Please confirm your region and enter your phone number." />
      </View>
      <View style={styles.body}>
        <Input
          editable={false}
          placeholder="Select Your Region"
          icon={require('../../assets/images/region.png')}
          value={countryCode}
        />
        <Input
          value={phone}
          keyboardType="number-pad"
          placeholder="Phone"
          icon={require('../../assets/images/phone.png')}
          onChangeText={text => {
            setPhone(text);
          }}
        />
      </View>
      <View>
        <Button
          title="Continue"
          size="medium"
          onPress={() => navigation.navigate(SETUPNAME, {phone: phone})}
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
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default VerificationPhoneNumber;
