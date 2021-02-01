import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {DarkTheme, NavigationContainer, Theme} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';

enableScreens();

const CustomDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#77839E',
    text: 'white',
    background: '#252E40',
    notification: 'pink',
    card: '#273344',
    //border: 'yellow',
  },
  dark: true,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={CustomDarkTheme}>
        <StatusBar
          barStyle={'light-content'}
          // translucent
          // backgroundColor={'transparent'}
        />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
