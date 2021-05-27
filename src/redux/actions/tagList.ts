const addTag = (data: any) => {
  return {
    type: 'ADD_TAG',
    data
  }
};
const removeTag = (data: any) => {
  return {
    type: 'REMOVE_TAG',
    data
  }
}
export { addTag, removeTag };