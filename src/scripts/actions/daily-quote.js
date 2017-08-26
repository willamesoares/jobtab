export const updateDailyQuote = (quote, author) => {
  return {
    type: 'UPDATE_DAILY_QUOTE',
    quote,
    author
  }
}
