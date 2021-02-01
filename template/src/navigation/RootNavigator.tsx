import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {AppRoute} from './routes';
import React from 'react';
import {QuotesNavigator} from './QuotesNavigator';
import {AccountSettingsNavigator} from './AccountSettingsNavigator';
import {FavoriteQuotesNavigator} from './FavoriteQuotesNavigator';
import {UserQuotesNavigator} from './UserQuotesNavigator';
import {MaskedIcon} from '../components/common/MaskedIcon';

export type RootNavigatorParams = {
  [AppRoute.ACCOUNT]: undefined;
  [AppRoute.FIRST]: undefined;
  [AppRoute.FAVORITES]: undefined;
  [AppRoute.USER_QUOTES]: undefined;
};

export interface FavoriteQuotesScreenProps {
  navigation: BottomTabNavigationProp<RootNavigatorParams, AppRoute.FAVORITES>;
  route: RouteProp<RootNavigatorParams, AppRoute.FAVORITES>;
}

const BottomTab = createBottomTabNavigator();

type BottomTabNavigatorProps = React.ComponentProps<typeof BottomTab.Navigator>;

export const RootNavigator = (
  props: Partial<BottomTabNavigatorProps>,
): React.ReactElement => {
  return (
    <BottomTab.Navigator {...props} tabBarOptions={{showLabel: false}}>
      <BottomTab.Screen
        name={AppRoute.FIRST}
        component={QuotesNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <MaskedIcon name={'sticky-note'} solid={focused} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoute.FAVORITES}
        component={FavoriteQuotesNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <MaskedIcon name={'heart'} solid={focused} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoute.USER_QUOTES}
        component={UserQuotesNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <MaskedIcon solid={focused} size={24} name={'edit'} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoute.ACCOUNT}
        component={AccountSettingsNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <MaskedIcon name={'user'} size={24} solid={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
