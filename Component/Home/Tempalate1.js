import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../UIcomponent/Icon';

const Tempalate1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Icon
          color={'orange'}
          width={30}
          height={30}
          iconUrl={'https://img.icons8.com/color/48/null/scooter.png'}
        />
        <Text style={styles.text}>
          Enjoy
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {' '}
            FREE DELIVERY{' '}
          </Text>
          on every order!
        </Text>
      </View>
      <View>
        <Text style={styles.extratext}>
          Offer valid on selected restaurants
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    margin: 10,
    padding: 15,

    borderRadius: 10,
    borderColor: '#efe1e1',
    elevation: 5,
    backgroundColor: '#efe1e1',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 13,
    color: 'black',
  },
  extratext: {
    fontSize: 10,
    position: 'absolute',
    top: -35,
    left: 65,
    marginTop: 5,
  },
});

export default Tempalate1;
