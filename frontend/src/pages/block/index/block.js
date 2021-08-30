import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

const Block = () => {
  return (
    <div>
      <h3>  
        <Link to="/block/mission">미션 제작</Link>
      </h3>
      <h3>  
        <Link to="/block/mission/1">답안 제작</Link>
      </h3>
      <h3>  
        <Link to="/block/answer/1">답안 수정</Link>
      </h3>

      <Switch>
        <Route path="/block/mission/:id">
          답안 제작
        </Route>
        <Route path="/block/mission">
          미션 제작
        </Route>
        <Route path="/block/answer/:id">
          답안 수정
        </Route>
      </Switch>
    </div>
  );
};

export default Block;