import React, { Component } from 'react';
import Button from 'components/common/Button/Button'

import './AuthForm.sass'

class AuthForm extends Component {
  static defaultProps = {
    fields: {
      username: '',
      password: '',
      passwordConfirm: ''
    }
  }

  handleKeyPress = e => {
    if(e.key==='Enter') {
      this.props.onSubmit()
    }
  }


  render() {
    const {
      register,
      fields,
      onGoBack,
      onChange,
      onSubmit,
      error
    } = this.props

    const {username, password, passwordConfirm} = fields
    return (
      <div className="AuthForm">
        {error && <div className="error">{error}</div>}
        <div className="inputs">
          <input
            name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
            onKeyPress={this.handleKeyPress}
          />
          {register && (
            <input
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 다시 입력"
              onChange={onChange}
              value={passwordConfirm}
              onKeyPress={this.handleKeyPress}
            />
          )}
        </div>
        <div className="buttons">
          <Button onClick={onGoBack}>뒤로</Button>
          <Button
            className="full-width"
            active
            onClick={onSubmit}
            type="submit"
          >
            {register ? "회원가입" : "로그인"}
          </Button>
        </div>
      </div>
    );
  }
}

export default AuthForm;