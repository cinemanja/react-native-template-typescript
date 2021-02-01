import {AppRoute} from './routes';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {UserQuotesScreen} from '../screens/userQuotes/UserQuotesScreen';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type UserQuotesNavigatorParams = {
  [AppRoute.USER_QUOTES]: undefined;
};

export interface UserQuotesScreenProps {
  navigation: NativeStackNavigationProp<
    UserQuotesNavigatorParams,
    AppRoute.USER_QUOTES
  >;
  route: RouteProp<UserQuotesNavigatorParams, AppRoute.USER_QUOTES>;
}

const Stack = createNativeStackNavigator();

export const UserQuotesNavigator = (
  props: Partial<StackNavigatorProps>,
): React.ReactElement => {
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{gestureEnabled: true, headerTopInsetEnabled: false}}>
      <Stack.Screen name={AppRoute.USER_QUOTES} component={UserQuotesScreen} />
    </Stack.Navigator>
  );
};
