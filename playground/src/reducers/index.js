
const customers = [
]
const reducer = (state = 0, action) => {
      if(action.type === 'CREATE_POLICY') {
          console.log('Am reduxing');
          return state.amount   +  action.payload.amount
      }
      return state
}

export default reducer;