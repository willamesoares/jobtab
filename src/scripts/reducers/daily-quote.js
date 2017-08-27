const inititalState  = {
  quote: 'You are the only person with your exact blend of talents and skills.',
  author: ''
}

export const dailyQuote = (state = inititalState, action) => {
  switch (action.type) {
  case 'UPDATE_DAILY_QUOTE':
    return {
      ...state,
      quote: action.quote,
      author: action.author
    }
  default:
    return state
  }
}
