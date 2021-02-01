import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {QuoteModel} from '../models/QuoteModel';
import QuoteService from '../services/QuoteService';

import {AppThunk} from '../store';

interface QuoteState {
  isLoading: boolean;
  error: string | null;
  quote: QuoteModel | undefined;
}

const quoteInitialState = {
  isLoading: false,
  error: null,
  quote: undefined,
} as QuoteState;

function startLoading(state: QuoteState) {
  state.isLoading = true;
}

function loadingFailed(state: QuoteState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

export const fetchRandomQuote = createAsyncThunk(
  'quotes/fetchRandomQuote',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_, {getState}) => {
    const quote = await QuoteService.fetchRandomQuote();
    return quote;
  },
);

const quotes = createSlice({
  name: 'quotes',
  initialState: quoteInitialState,
  reducers: {
    getQuoteStart: startLoading,
    getQuoteSuccess(state, {payload}: PayloadAction<QuoteModel>) {
      state.isLoading = false;
      state.error = null;
      state.quote = payload;
    },
    getQuoteFailure: loadingFailed,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRandomQuote.fulfilled,
      (state, action: PayloadAction<QuoteModel>) => {
        state.quote = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(fetchRandomQuote.pending, startLoading);
    builder.addCase(fetchRandomQuote.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const {getQuoteStart, getQuoteSuccess, getQuoteFailure} = quotes.actions;

export default quotes.reducer;

export const fetchQuote = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getQuoteStart());
    const quote = await QuoteService.fetchRandomQuote();
    dispatch(getQuoteSuccess(quote));
  } catch (err) {
    dispatch(getQuoteFailure(err));
  }
};
