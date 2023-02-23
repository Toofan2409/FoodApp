import React from 'react';
import {Text} from 'react-native';

const Divider = ({text}) => {
  return (
    <>
      <Text style={{fontWeight: 200}}>
        _______________________________________________________________
      </Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          fontWeight: '500',
          alignItems: 'center',
        }}>
        {text}
      </Text>
    </>
  );
};

export default Divider;
