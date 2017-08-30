export const filter = (state = [], action) => {
  switch (action.type) {
  case 'FILTER_OFFERS':
    return action.offers.filter(offer => offer.tags.indexOf(action.tag) !== -1)
  case 'REMOVE_FILTER':
    return action.offers
  default:
    return state
  }
}
