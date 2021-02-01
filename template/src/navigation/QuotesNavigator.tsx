import {AppRoute} from './routes';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {QuotesScreen} from '../screens/QuotesScreen';
import {PostScreen, QuoteScreenRouteParams} from '../screens/QuoteScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.FIRST]: undefined;
  [AppRoute.QUOTE]: QuoteScreenRouteParams;
};

export interface QuotesScreenProps {
  navigation: NativeStackNavigationProp<AppNavigatorParams, AppRoute.FIRST>;
  route: RouteProp<AppNavigatorParams, AppRoute.FIRST>;
}

export interface PostScreenProps {
  navigation: NativeStackNavigationProp<AppNavigatorParams, AppRoute.QUOTE>;
  route: RouteProp<AppNavigatorParams, AppRoute.QUOTE>;
}

const Stack = createNativeStackNavigator();

export const QuotesNavigator = (
  props: Partial<StackNavigatorProps>,
): React.ReactElement => {
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{gestureEnabled: true, headerTopInsetEnabled: false}}>
      <Stack.Screen name={AppRoute.FIRST} component={QuotesScreen} />
      <Stack.Screen name={AppRoute.QUOTE} component={PostScreen} />
    </Stack.Navigator>
  );
};
