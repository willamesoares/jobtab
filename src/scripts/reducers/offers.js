const initialState = [
  {
    id: 1,
    company: 'toptal',
    job: 'web developer',
    date: 'jul, 26'
  }
]

export const offers = (state = [], action) => {
  switch (action.type) {
  case 'ADD_OFFER':
    return [
      ...state,
      action.offer
    ]
  default:
    return state
  }
}
