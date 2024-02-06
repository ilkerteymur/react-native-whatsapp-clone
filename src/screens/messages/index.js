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

const Message = () => {
  const [messages, setMessages] = useState([]);
  const getMessages = () => {
    firestore()
      .collection('messages')
      .doc('CtU7Kqdy4GsCzBEzavLN')
      .get()
      .then(documentSnapshot => {
        let userMessages = [];
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          userMessages.push(documentSnapshot.data());
          setMessages(userMessages);
        }
      });
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={<Text style={{fontSize: 20, marginLeft: 10}}>Messages</Text>}
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
        data={messages}
        renderItem={({item}) => <MessageCard item={item} />}
      />
      <FloatActionButton icon={require('../../assets/images/edit.png')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutral.White,
  },
});

export default Message;
