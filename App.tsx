import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './UIcomponent/Icon';
import History from './Screen/History';

const Stack = createNativeStackNavigator();
const BottemTab = createBottomTabNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={BottomTabbar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabbar = () => {
  return (
    <BottemTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarActiveTintColor: 'orange',
      }}>
      <BottemTab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              color={'orange'}
              width={30}
              height={30}
              iconUrl={'https://img.icons8.com/color/48/null/scooter.png'}
            />
          ),
        }}
        name="Delievery"
        component={Home}
      />
      <BottemTab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              color={'orange'}
              width={30}
              height={30}
              iconUrl={
                'https://img.icons8.com/fluency-systems-filled/48/null/scroll.png'
              }
            />
          ),
        }}
        name="History"
        component={History}
      />
      <BottemTab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              color={'orange'}
              width={30}
              height={30}
              iconUrl={
                'https://img.icons8.com/ios-glyphs/30/null/card-wallet.png'
              }
            />
          ),
        }}
        name="Money"
        component={Home}
      />
    </BottemTab.Navigator>
  );
};

export default App;
