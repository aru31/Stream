import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import {register} from  '../actions/register'
import {registerError} from '../reducers'

const Register = (props) => {
    return (
      <div className="login-page">
        <RegisterForm {...props}/>
      </div>
    )
}

const mapStateToProps = (state) => ({
  errors: registerError(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (first_name, username, email, password, confirmPassword) => {
    dispatch(register(first_name, username, email, password, confirmPassword))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
