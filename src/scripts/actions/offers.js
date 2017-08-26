export const addOffer = (offer) => {
  return {
    type: 'ADD_OFFER',
    offer
  }
}

export const clearOfferList = () => {
  return {
    type: 'CLEAR_OFFER_LIST'
  }
}
