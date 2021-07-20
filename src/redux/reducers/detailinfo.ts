const getdetail = (state = {}, action: any) => {
  switch (action.type) {
    case 'CONVEY_DEL':
      state = action.data
      return state
    default:
      return state
  }
}
export default getdetail;