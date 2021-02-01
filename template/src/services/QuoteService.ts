import {QuoteModel} from '../models/QuoteModel';
import {sendGetRequest} from '../utils/api';

interface QuoteService {
  /**
   * Fetch top news for the requested country param.
   *
   * @param country Country for the search query.
   * * @param page Page number when loading additional data.
   */
  fetchRandomQuote(): Promise<any>;
}

class QuotesAxiosService implements QuoteService {
  async fetchRandomQuote(): Promise<QuoteModel> {
    try {
      const res = await sendGetRequest('/random');
      const data = res.data;
      const quote = data.data[0];
      const {_id, quoteText, quoteAuthor, quoteGenre} = quote;
      return {id: _id, text: quoteText, author: quoteAuthor, genre: quoteGenre};
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new QuotesAxiosService() as QuoteService;
