import {AppRoute} from './routes';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {AccountScreen} from '../screens/account/AccountScreen';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AccountSettingsNavigatorParams = {
  [AppRoute.ACCOUNT]: undefined;
};

export interface AccountScreenProps {
  navigation: NativeStackNavigationProp<
    AccountSettingsNavigatorParams,
    AppRoute.ACCOUNT
  >;
  route: RouteProp<AccountSettingsNavigatorParams, AppRoute.ACCOUNT>;
}

const Stack = createNativeStackNavigator();

export const AccountSettingsNavigator = (
  props: Partial<StackNavigatorProps>,
): React.ReactElement => {
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{gestureEnabled: true, headerTopInsetEnabled: true}}>
      <Stack.Screen name={AppRoute.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
  );
};
