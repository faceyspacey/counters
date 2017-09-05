export default (state = 0, action = {}) => {
  console.log('STATE', state)
  switch(action.type) {
    case 'INCREMENT':
      return ++state
    case 'DECREMENT':
      return --state
    case 'RESET':
      return 0
    case 'RESET_TO':
      return action.payload.newCount
    default:
      return state
  }
}


