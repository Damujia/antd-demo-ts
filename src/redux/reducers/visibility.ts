interface Act {
  type: string,
  filter: any
}
const visibility = (state: string = 'SHOW_ALL', action: Act) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visibility;