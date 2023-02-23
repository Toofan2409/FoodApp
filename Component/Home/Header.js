import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import Icon from '../../UIcomponent/Icon';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerleft}>
        <TouchableOpacity>
          <Icon
            iconUrl={'https://img.icons8.com/color/48/null/marker--v1.png'}
            width={25}
            height={25}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.addressText}>Dr Radhakrishana Nager</Text>
          <Text>Vikas nager , neemuch</Text>
        </View>
        <Icon
          width={25}
          height={25}
          iconUrl={
            'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png'
          }
        />
      </View>
      <View style={styles.headerRight}>
        <Icon
          color={'orange'}
          width={35}
          height={35}
          iconUrl={
            'https://img.icons8.com/ios-filled/50/null/user-male-circle.png'
          }
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerleft: {
    flexDirection: 'row',
  },
  headerRight: {
    marginTop: 0,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 900,
  },
});
