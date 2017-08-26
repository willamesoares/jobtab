export const searchBar = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_BAR':
    return action.value
  default:
    return state
  }
}
