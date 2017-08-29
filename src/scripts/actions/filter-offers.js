export const filterOffers = ({ tag, offers }) => {
  return {
    type: 'FILTER_OFFERS',
    tag,
    offers
  }
}

export  const removeFilter = (offers) => {
  return {
    type: 'REMOVE_FILTER',
    offers
  }
}
