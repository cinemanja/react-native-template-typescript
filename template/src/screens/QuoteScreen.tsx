import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {QuoteModel} from '../models/QuoteModel';
import {PostScreenProps} from '../navigation/QuotesNavigator';

export interface QuoteScreenRouteParams {
  quote: QuoteModel;
}

export const PostScreen: React.FC<PostScreenProps> = ({route}) => {
  const {quote} = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quote.author}</Text>
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
