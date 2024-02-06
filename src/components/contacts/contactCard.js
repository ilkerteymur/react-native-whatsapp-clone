import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import Avatar from '../ui/avatar';
import AppColors from '../../utils/colors';
import {compareUserName} from '../../utils/functions';

const ContactCard = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Avatar name={item.name} surname={item.surname} />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          justifyContent: 'space-around',
          paddingBottom: 15,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>
          {compareUserName(item.name, item.surname)}
        </Text>
        {item.status ? (
          <Text style={{fontSize: 14, color: AppColors.Accent.Green}}>
            Online
          </Text>
        ) : (
          <Text style={{fontSize: 14, color: AppColors.Neutral.Gray}}>
            Last seen today at {item.lastSeen}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
});

export default ContactCard;
