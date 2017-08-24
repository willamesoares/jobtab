export const updateTime = (hours) => {
  const { convertedHours, minutes, format } = hours

  return {
    type: 'UPDATE_CLOCK',
    hours: {
      convertedHours,
      minutes,
      format
    }
  }
}
