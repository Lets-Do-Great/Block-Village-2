import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div>
      <h3>  
        <Link to="/mission">미션 목록</Link>
      </h3>
      <h3>  
        <Link to="/mission/1">미션 상세보기</Link>
      </h3>
      <h3>  
        <Link to="/mission/1/1">답안 상세보기</Link>
      </h3>

      <Switch>
        <Route path="/mission/:missionId/:answerId">
          답안 상세보기
        </Route>
        <Route path="/mission/:missionId">
          미션 상세보기
        </Route>
        <Route path="/mission">
          미션 목록
        </Route>
      </Switch>
    </div>
  );
};

export default Mission;