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

export const serverRegister = (state) => state.register
