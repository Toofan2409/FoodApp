import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const History = () => {
  return (
    <View style={styles.root}>
      {/* <Image /> */}
      <View style={{marginTop: 65, alignItems: 'center'}}>
        <Text style={styles.texttop}>India's #1 food</Text>
        <Text style={styles.texttop}>delivery app</Text>
      </View>

      <View style={styles.text60off}>
        <Text style={styles.text2}>60%</Text>
        <Text style={[styles.text2, {marginTop: -12}]}>OFF</Text>
      </View>
      <View>
        <Text style={styles.text4}>up to rs 120</Text>
      </View>
      <View>
        <Text
          style={[
            styles.text6,
            {position: 'absolute', color: 'white', left: 85, top: 9},
          ]}>
          +
        </Text>
        <Text
          style={[
            styles.text6,
            {fontWeight: '300'},
          ]}>{`_______      _______`}</Text>
      </View>
      <View style={styles.freedelivery}>
        <Text style={styles.text5}>Free Delivery</Text>
      </View>
      <View>
        <Text style={styles.text6}>on first order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(154, 13, 13)',
    alignItems: 'center',
    opacity: 0.9,
  },
  freedelivery: {
    marginTop: 20,
  },
  texttop: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  text60off: {
    marginTop: 40,
  },
  text2: {
    color: 'white',
    fontSize: 35,

    fontWeight: 'bold',
  },
  text3: {
    color: 'white',
    fontSize: 35,

    fontWeight: 'bold',
  },
  text4: {
    color: '#cccccc',
    fontSize: 20,
    fontWeight: '400',
  },
  text5: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text6: {
    color: '#cccccc',
    fontSize: 20,
    fontWeight: '400',
  },
});
export default History;
