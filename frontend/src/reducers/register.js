import * as register from '../actions/register'

const initialState = {
    register: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case register.REGISTER_SUCCESS:
      return {
          register: action.payload.register
      }
    default:
      return state
  }
}

export function errors(state) {
   return  state.errors
}

export const serverRegister = (state) => state.register
