export const offers = (state = [], action) => {
  switch (action.type) {
  case 'ADD_OFFER':
    return [
      ...state,
      action.offer
    ]
  case 'CLEAR_OFFER_LIST':
    return []
  default:
    return state
  }
}
