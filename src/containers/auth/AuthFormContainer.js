import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import AuthForm from 'components/auth/AuthForm/AuthForm'
import * as authActions from 'store/modules/auth'



class AuthFormContainer extends Component {

  handleChange = e => {
    const { name, value } = e.target
    const { AuthActions } = this.props
    AuthActions.changeInput({
      field: name,
      value,
    })
  }

  handleGoBack = () => {
    const { history } = this.props
    history.goBack()
  }

  handleRegister = async() => {

  }

  handleLogin = async() => {

  }

  componentDidMount() {
    const { AuthActions } = this.props
    AuthActions.initialize()
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.type !== this.props.type ) {
      const {AuthActions} = this.props
      AuthActions.initialize()
    }
  }


  render() {
    const { type, fields, error } = this.props
    return (
      <AuthForm
        register={type === 'register'}
        onGoBack={this.handleGoBack}
        onChange={this.handleChange}
        onSubmit={type==='register' ? this.handleRegister : this.handleLogin}
        fields={fields}
        error={error}
      />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({auth})=>({fields: auth.fields, error: auth.error}),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch)
    })
  )
)

export default enhance(AuthFormContainer);