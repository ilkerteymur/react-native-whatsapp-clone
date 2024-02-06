// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/app/onBoarding';
import {
  ADDCONTACT,
  ONBOARDING,
  SETUPNAME,
  SETUPPHOTO,
  TABMENU,
  VERIFICATIONPHONENUMBER,
} from '../utils/routes';
import VerificationPhoneNumber from '../screens/setUp/verificationPhoneNumber';
import SetUpName from '../screens/setUp/setUpName';
import SetUpPhoto from '../screens/setUp/setUpPhoto';
import TabNavigator from './tabNavigator';
import AddContact from '../screens/contacts/addContact';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABMENU} component={TabNavigator} />
      <Stack.Screen name={ONBOARDING} component={OnBoarding} />
      <Stack.Screen
        name={VERIFICATIONPHONENUMBER}
        component={VerificationPhoneNumber}
      />
      <Stack.Screen name={SETUPNAME} component={SetUpName} />
      <Stack.Screen name={SETUPPHOTO} component={SetUpPhoto} />
      <Stack.Screen name={ADDCONTACT} component={AddContact} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
