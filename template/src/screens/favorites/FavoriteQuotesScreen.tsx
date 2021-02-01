import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {FavoriteQuotesScreenProps} from '../../navigation/RootNavigator';

export const FavoriteQuotesScreen: React.FC<FavoriteQuotesScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  } as TextStyle,
  body: {
    fontSize: 14,
  } as TextStyle,
});
