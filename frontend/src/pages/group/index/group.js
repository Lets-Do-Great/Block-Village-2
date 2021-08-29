import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Group = () => {
  return (
    <div>
      <h3>  
        <Link to="/group">그룹 목록</Link>
      </h3>
      <h3>  
        <Link to="/group/1/info">그룹 상세 페이지</Link>
      </h3>

      <Switch>
        <Route path="/group/:id/:tab">
          그룹 상세 페이지
        </Route>
        <Route path="/group">
          그룹 목록
        </Route>
      </Switch>
    </div>
  );
};

export default Group;