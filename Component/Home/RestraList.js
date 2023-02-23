import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Icon from '../../UIcomponent/Icon';

export const restra = [
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
  {
    name: 'sigadi99',
    rating: '4.7',
    category: 'Veg',
    preparationTime: '25 min',
    distance: '1.5KM',
    imageurl: 'https://picsum.photos/200/300',
  },
];

const RestraList = ({list}) => {
  const restraListHandler = data => {
    // console.log(data);

    return (
      <>
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: data.item.imageurl}} />
          <Text style={styles.restranametext}>
            {data.item.name.toUpperCase()}
          </Text>

          <View style={styles.text1}>
            <Text style={{color: 'white'}}>{data.item.category}</Text>
            <Text style={styles.rating}>{`${data.item.rating} ☆`}</Text>
          </View>
          <View style={styles.cardbottem}>
            <Text style={styles.cardbottemtext}>
              {data.item.preparationTime}.{data.item.distance}
            </Text>
            <Text style={styles.cardbottemtext}>150 for One</Text>
          </View>
          <View style={styles.popup}>
            <Text style={styles.popuptext}>10 % OFF up to Rs 40</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList data={list} renderItem={restraListHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  card: {
    backgroundColor: 'white',
    borderColor: 'white',
    elevation: 5,
    overflow: 'hidden',
    margin: 20,
    borderWidth: 0.5,
    height: 250,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  restranametext: {
    position: 'absolute',
    top: 130,
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  text1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -40,
    marginLeft: 20,
    marginRight: 10,
  },
  rating: {
    borderRadius: 5,
    width: 40,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
    backgroundColor: 'green',
  },
  cardbottem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
  },
  cardbottemtext: {
    fontSize: 16,
    fontWeight: 500,
  },
  popup: {
    borderWidth: 0.5,
    backgroundColor: '#3268ca',
    position: 'absolute',
    top: 185,
    elevation: 4,
    borderColor: '#3268ca',
    padding: 5,
    width: 260,
    marginLeft: 30,
    marginRight: 20,
    borderRadius: 15,
  },
  popuptext: {
    color: 'white',
    textAlign: 'center',
  },
});
export default RestraList;
