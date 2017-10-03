const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, {count: state.count + 1})
    default:
      return state;
  }
}

export default reducer;
