export const increment = () => ({ type: 'INCREMENT' })

export const decrement = () => {
  console.log('HELP')
  return { type: 'DECREMENT' }
}
