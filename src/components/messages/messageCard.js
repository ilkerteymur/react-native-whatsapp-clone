import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import Avatar from '../ui/avatar';
import AppColors from '../../utils/colors';
import Badge from '../ui/badge';
import {compareUserName} from '../../utils/functions';

const MessageCard = ({item}) => {
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
        <Text style={{fontSize: 14, color: AppColors.Neutral.Gray}}>
          {item.value}
        </Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{fontSize: 14, color: AppColors.Neutral.Gray}}>
          {item.time}
        </Text>
        {item.count ? <Badge count={item.count} /> : null}
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

export default MessageCard;
