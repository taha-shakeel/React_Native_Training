import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
// import FindOutMoreScreen from './screens/FindMoreScreen';

import HomeContainer from './containers/HomeContainer';
import FindMoreContainer from './containers/FindMoreContainer';

import store from './store/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="About-us" component={AboutUsScreen} />
          <Stack.Screen name="More" component={FindMoreContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
