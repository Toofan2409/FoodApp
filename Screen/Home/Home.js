import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../Component/Home/divider';
import Foodtype, {food, food2} from '../../Component/Home/Foodtype';
import Header from '../../Component/Home/Header';
import RestraList, {restra} from '../../Component/Home/RestraList';
import SortingOption from '../../Component/Home/SortingOption';
import Tempalate1 from '../../Component/Home/Tempalate1';
import SearchBar from '../../UIcomponent/SearchBar';

const Home = () => {
  return (
    <View style={styles.root}>
      <Header />
      <SearchBar />
      <SortingOption />

      <ScrollView nestedScrollEnabled={true}>
        <Tempalate1 />
        <Divider text={'OFFERS FOR YOU'} />
        <Tempalate1 />
        <Divider text={`WHAT'S ON YOUR MIND?`} />
        <Foodtype foodtype={food} />
        <Foodtype foodtype={food2} />
        <Divider text={`ALL  RESTAURANTS  AROUND  YOU`} />
        <RestraList list={restra} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Home;
