import {Image} from 'react-native';
import React from 'react';

const TabBarIcon = ({icon}) => {
  return (
    <Image
      style={{
        width: 25,
        height: 25,
        resizeMode: 'contain',
      }}
      source={icon}
    />
  );
};

export default TabBarIcon;
