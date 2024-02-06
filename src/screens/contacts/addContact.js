import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AppColors from '../../utils/colors';
import Header from '../../components/router/header';
import Avatar from '../../components/ui/avatar';
import Input from '../../components/ui/input';

const AddContact = props => {
  const {navigation} = props;
  const [name, setName] = useState('tttt');
  const [surname, setSurname] = useState('aaaa');
  const [phone, setPhone] = useState('231322131');
  const [photo, setPhoto] = useState(null);

  const addContact = () => {
    const form = {
      name: name,
      surname: surname,
      photo: photo,
      phone: phone,
      status: true,
    };
    firestore()
      .collection('Contacts')
      .add(form)
      .then(() => {
        Alert.alert('Kullanıcı Eklendi');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{width: 24, height: 24, resizeMode: 'contain'}}
                source={require('../../assets/images/back.png')}
              />
            </Pressable>
            <Text style={{fontSize: 20, marginLeft: 15}}>Add contact</Text>
          </View>
        }
        right={
          <Pressable onPress={() => addContact()} style={{marginRight: 10}}>
            <Image
              style={{width: 28, height: 28, resizeMode: 'contain'}}
              source={require('../../assets/images/check.png')}
            />
          </Pressable>
        }
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Avatar name={name} surname={surname} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
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
        <Input
          value={phone}
          placeholder={'Phone'}
          icon={require('../../assets/images/phone.png')}
          onChangeText={text => {
            setPhone(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Brand.White,
  },
});

export default AddContact;
