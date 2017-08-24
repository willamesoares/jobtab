const inititalState = {
  hours: {
    convertedHours: '',
    minutes: '',
    format: ''
  }
}

export const clock = (state = inititalState, action) => {
  switch (action.type) {
  case 'UPDATE_CLOCK':
    return { ...state, hours: action.hours }
  default:
    return state
  }
}
