import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import {register} from  '../actions/register'

const Register = (props) => {
    return (
      <div className="login-page">
        <RegisterForm {...props}/>
      </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
  onSubmit: (first_name, username, email, password, confirmPassword) => {
    dispatch(register(first_name, username, email, password, confirmPassword))
  }
})

export default connect(null, mapDispatchToProps)(Register);
