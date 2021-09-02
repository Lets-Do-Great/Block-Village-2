import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

const MyPage = () => {
  return (
    <div>
      <h3>  
        <Link to="/me">마이페이지 메인</Link>
      </h3>
      <h3>  
        <Link to="/me/info/read">내 정보 조회</Link>
      </h3>
      <h3>  
        <Link to="/me/info/update">내 정보 수정</Link>
      </h3>
      <h3>  
        <Link to="/me/block">내 블록 목록</Link>
      </h3>
      <h3>  
        <Link to="/me/mission">내 미션 목록</Link>
      </h3>
      <h3>  
        <Link to="/me/mission/1">내 미션 상세 페이지</Link>
      </h3>
      <h3>  
        <Link to="/me/answer">내 답안 목록</Link>
      </h3>
      <h3>  
        <Link to="/me/answer/1">내 답안 상세 페이지</Link>
      </h3>

      <Switch>
        <Route path="/me/info/:mode">
          내 정보 조회 / 수정
        </Route>
        <Route path="/me/block">
          내 블록 목록
        </Route>
        <Route path="/me/:type/:id">
          내 미션 / 답안 상세페이지
        </Route>
        <Route path="/me/:type">
          내 미션 / 답안 목록 
        </Route>
      </Switch>
    </div>
  );
};

export default MyPage;