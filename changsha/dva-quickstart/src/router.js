import React from 'react';
import { Router, Route, Switch } from 'dva/router';
//首页
import IndexPage from './routes/IndexPage';
//产品列表
import Login from './routes/Login';
import Sign from './routes/Sign';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/sign" exact component={Sign} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
