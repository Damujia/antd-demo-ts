const getmenu = (state = [], action: any) => {
  switch (action.type) {
    case 'GET_MENU':
      state = action.data
      return state
    default:
      return state
  }
}
export default getmenu;