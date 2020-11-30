function changeState(state = { count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
function dispatch(action){
  state = changeState(state,action)
  render()
  return state
}
function render(){
  document.body.textContent = state.count
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)
render()