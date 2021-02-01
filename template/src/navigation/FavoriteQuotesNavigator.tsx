import {AppRoute} from './routes';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {FavoriteQuotesScreen} from '../screens/favorites/FavoriteQuotesScreen';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type FavoriteQuotesNavigatorParams = {
  [AppRoute.FAVORITES]: undefined;
};

export interface AccountScreenProps {
  navigation: NativeStackNavigationProp<
    FavoriteQuotesNavigatorParams,
    AppRoute.FAVORITES
  >;
  route: RouteProp<FavoriteQuotesNavigatorParams, AppRoute.FAVORITES>;
}

const Stack = createNativeStackNavigator();

export const FavoriteQuotesNavigator = (
  props: Partial<StackNavigatorProps>,
): React.ReactElement => {
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{gestureEnabled: true, headerTopInsetEnabled: false}}>
      <Stack.Screen
        name={AppRoute.FAVORITES}
        component={FavoriteQuotesScreen}
      />
    </Stack.Navigator>
  );
};
