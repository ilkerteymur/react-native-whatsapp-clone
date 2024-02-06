import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/router/header';
import firestore from '@react-native-firebase/firestore';
import AppColors from '../../utils/colors';
import FloatActionButton from '../../components/ui/floatActionButton';
import {messages} from '../../utils/mockData';
import MessageCard from '../../components/messages/messageCard';
import ContactCard from '../../components/contacts/contactCard';
import {ADDCONTACT} from '../../utils/routes';

const Contacts = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const getContacts = () => {
    firestore()
      .collection('Contacts')
      .get()
      .then(querySnapshot => {
        const contacts = [];
        querySnapshot.forEach(documentSnapshot => {
          contacts.push({
            name: documentSnapshot.data().name,
            surname: documentSnapshot.data().surname,
            status: documentSnapshot.data().status,
            lastSeen: documentSnapshot.data().lastSeen,
          });
        });
        setContacts(contacts);
      });
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={<Text style={{fontSize: 20, marginLeft: 10}}>Contacts</Text>}
        right={
          <Pressable style={{marginRight: 10}}>
            <Image
              style={{width: 28, height: 28, resizeMode: 'contain'}}
              source={require('../../assets/images/search.png')}
            />
          </Pressable>
        }
      />
      <FlatList
        data={contacts}
        renderItem={({item}) => <ContactCard item={item} />}
      />
      <FloatActionButton
        onPress={() => navigation.navigate(ADDCONTACT)}
        icon={require('../../assets/images/addUser.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutral.White,
  },
});

export default Contacts;
