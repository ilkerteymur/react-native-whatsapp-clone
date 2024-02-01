import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/ui/input';
import {SETUPPHOTO} from '../../utils/routes';

const SetUpName = ({route}) => {
  const [name, setName] = useState('ilker');
  const [surname, setSurname] = useState('teymur');
  const navigation = useNavigation();
  const phone = route?.params?.phone;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Create your name" />
        <SectionDescription text="Get more people to know your name." />
      </View>
      <View style={styles.body}>
        <Input
          value={name}
          placeholder={'Name'}
          icon={require('../../assets/images/user.png')}
          onChangeText={text => {
            setName(text);
          }}
        />
        <Input
          value={surname}
          placeholder={'Surname'}
          icon={require('../../assets/images/user.png')}
          onChangeText={text => {
            setSurname(text);
          }}
        />
      </View>
      <View>
        <Button
          title="Continue"
          size="medium"
          onPress={() =>
            navigation.navigate(SETUPPHOTO, {
              phone: phone,
              name: name,
              surname: surname,
            })
          }
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

export default SetUpName;
