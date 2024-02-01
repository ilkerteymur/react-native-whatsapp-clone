import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MESSAGE, CONTACTS, CALL, PROFILE} from '../utils/routes';
import Message from '../screens/messages';
import Contacts from '../screens/contacts';
import Calls from '../screens/calls';
import Profile from '../screens/profile';
import AppColors from '../utils/colors';
import TabBarIcon from '../components/router/tabBarIcon';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === MESSAGE) {
            iconName = require('../assets/images/message.png');
          } else if (route.name === CONTACTS) {
            iconName = require('../assets/images/users.png');
          } else if (route.name === CALL) {
            iconName = require('../assets/images/calls.png');
          } else if (route.name === PROFILE) {
            iconName = require('../assets/images/user.png');
          }
          // You can return any component that you like here!
          return <TabBarIcon icon={iconName} />;
        },
        tabBarActiveTintColor: AppColors.Neutral.Black,
        tabBarInactiveTintColor: AppColors.Neutral.Gray,
        headerShown: false,
      })}>
      <Tab.Screen name={MESSAGE} component={Message} />
      <Tab.Screen name={CONTACTS} component={Contacts} />
      <Tab.Screen name={CALL} component={Calls} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
