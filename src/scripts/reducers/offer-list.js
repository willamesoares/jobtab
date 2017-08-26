export const offerList = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_OFFER_LIST_MESSAGE':
    return {
      ...state,
      message: action.message  
    }
  default:
    return state
  }
}
