import React from 'react';
import HideHeader from 'containers/base/HideHeader'
import AuthTemplate from 'components/auth/AuthTemplate/AuthTemplate'
import AuthFormContainer from 'containers/auth/AuthFormContainer';


const AuthPage = ({ match }) => {
  const { authType } = match.params;
  return (
    <AuthTemplate type={authType}>
      <HideHeader />
      <AuthFormContainer type={authType} />
    </AuthTemplate>
  );
};

export default AuthPage;