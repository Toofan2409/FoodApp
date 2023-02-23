import React from 'react';
import {Image, FlatList, Text, View, StyleSheet} from 'react-native';

export const food = [
  'Pizza',
  'Burger',
  'Sandwich',
  'Biryani',
  'chicken',
  'Thali',
  'Dosa',
];
export const food2 = [
  'Pizza',
  'Burger',
  'Sandwich',
  'Biryani',
  'chicken',
  'Thali',
  'Dosa',
];

const Foodtype = ({foodtype}) => {
  const foodHandler = item => {
    // console.log(item);
    return (
      <>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'https://picsum.photos/200'}}></Image>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      </>
    );
  };
  return (
    <View>
      <FlatList horizontal={true} data={foodtype} renderItem={foodHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    // width: 80,
    // height: 80,
    margin: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderRadius: 80 / 2,
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});
export default Foodtype;
