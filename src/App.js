import React from 'react';
import { Route } from 'react-router-dom'
import AppTemplate from 'components/base/AppTemplate';
import {AuthPage, TweetsPage } from 'pages'
import HeaderContainer from 'containers/base/HeaderContainer'
// import Core from 'containers/base/Core'


const App = () => {
  return (
    <AppTemplate header={<HeaderContainer/>}>
      <Route exact path="/" component={TweetsPage} />
      <Route path="/users/:username" component={TweetsPage} />
      <Route path="/tags/:tag" component={TweetsPage} />

      <Route path="/:authType(login|register)" component={AuthPage} />
    </AppTemplate>
  );
}

export default App;
