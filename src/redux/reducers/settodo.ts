interface Act {
  type: string,
  id: any,
  text: string
}
interface States {
  id: number,
  completed: any
}

const todos = (state = [], action: Act) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((e: States) =>
        (e.id === action.id) ? { ...e, completed: !e.completed } : e
      )
    default:
      return state
  }
}
export default todos;