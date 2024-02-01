import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {StatusBar} from 'react-native';
import AppColors from './src/utils/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={AppColors.Brand.White}
        barStyle={'dark-content'}
      />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
