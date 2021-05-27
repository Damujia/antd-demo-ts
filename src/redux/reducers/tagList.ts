interface Act {
  type: string,
  data: string
}
interface State {
  path: string
}

/* eslint-disable */
const tagList = (state = [], action: Act) => {
  switch (action.type) {
    case 'ADD_TAG':
      let arr = [...state, action.data];
      let hash: any = {};
      let newArr = arr.reduce((item: any[], next: any) => {
        hash[next.path] ? '' : (hash[next.path] = true && item.push(next));
        return item;
      }, []);
      sessionStorage.setItem('menu', JSON.stringify(newArr))
      return newArr;
      break;
    case 'REMOVE_TAG':
      let remArr = state.filter((e: State) => {
        if (e.path !== action.data) {
          return e
        }
      })
      sessionStorage.setItem('menu', JSON.stringify(remArr))
      return remArr
    default:
      return state;
  }
}
export default tagList;