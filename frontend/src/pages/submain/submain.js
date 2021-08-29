import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Submain = () => {
  return (
    <div>
      서브메인
      <h3>  
        <Link to="/submain/signIn">로그인</Link>
      </h3>
      <h3>  
        <Link to="/submain/signUp">회원가입</Link>
      </h3>
      <h3>  
        <Link to="/submain/findPW">비밀번호 찾기</Link>
      </h3>

      <Switch>
        <Route path="/submain/signIn">
          로그인
        </Route>
        <Route path="/submain/signUp">
          회원가입
        </Route>
        <Route path="/submain/findPW">
          비밀번호 찾기
        </Route>
      </Switch>
    </div>
  );
};

export default Submain;