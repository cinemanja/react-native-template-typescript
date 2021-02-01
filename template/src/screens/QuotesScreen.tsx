import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  Button,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {QuotesScreenProps} from '../navigation/QuotesNavigator';
import {AppRoute} from '../navigation/routes';
import {fetchRandomQuote} from '../reducers/quotesSlice';
import {RootState} from '../reducers/RootReducer';

export const QuotesScreen: React.FC<QuotesScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading, quote, error} = useSelector(
    (state: RootState) => state.quotes,
  );

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={'large'} animating={isLoading} />
      <Text>{quote?.text}</Text>
      <Button
        title={'navigate'}
        onPress={() => navigation.navigate(AppRoute.QUOTE, {quote: quote!})}
      />
      <Text>{error}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  } as ViewStyle,
  separator: {
    height: 2,
    backgroundColor: 'black',
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
  content: {
    padding: 20,
  } as ViewStyle,
});
