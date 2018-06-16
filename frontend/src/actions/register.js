import { RSAA } from 'redux-api-middleware';

export const REGISTER_REQUEST = '@@register/REGISTER_REQUEST';
export const REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS';
export const REGISTER_FAILURE = '@@register/REGISTER_FAILURE';

export const register = (first_name, username, email, password, confirmPassword) => ({
  [RSAA]: {
      endpoint: '/stream/user/register/',
      method: 'POST',
      body: JSON.stringify({first_name, username, email, password, confirmPassword}),
      headers: ({ 'Content-Type': 'application/json' }),
      types: [
        REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
      ]
  }
})

