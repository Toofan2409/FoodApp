import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from './Icon';

const SearchBar = () => {
  return (
    <>
      <View style={styles.search}>
        <TextInput style={{marginLeft: 30}} />
      </View>
      <View style={styles.icon}>
        <Icon
          color={'orange'}
          width={25}
          height={25}
          iconUrl={'https://img.icons8.com/color/48/null/search--v1.png'}
        />
        <Icon
          color={'orange'}
          width={25}
          height={25}
          iconUrl={'https://img.icons8.com/color/48/null/google-assistant.png'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    top: -35,
    marginLeft: 25,
    marginRight: 25,
  },
  search: {
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: 5,
    alignSelf: 'center',
    width: '90%',
    height: 40,
    borderRadius: 5,
    borderWidth: 0.2,
    elevation: 2,
  },
});

export default SearchBar;
