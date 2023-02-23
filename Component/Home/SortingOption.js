import {ScrollView, StyleSheet, Text, View} from 'react-native';

const option = [
  'Sort',
  'Fast-Delivery',
  'pure-Veg',
  'More',
  'Rating 4.0+',
  'Sort',
  'Fast-Delivery',
  'pure-Veg',
  'More',
  'Rating 4.0+',
];
const SortingOption = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {option.map(item => {
          // console.log(item);

          return (
            <ScrollView horizontal={true}>
              <View style={styles.option}>
                <Text style={styles.text}>{item}</Text>
              </View>
            </ScrollView>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    // color: 'black',
    fontWeight: '600',
  },
  option: {
    marginBottom: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 6,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
  },
});

export default SortingOption;
