import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Button from '../../../components/button/button';
import Modal from '../../../components/modal/Modal';
import FindPW from '../findPW/findPW';
import SetPW from '../setPW/setPW';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

const Submain = () => {
  const history = useHistory();

  const goToSubmain = () => {
    history.push('/submain');
  }

  const goToSignIn = () => {
    history.push('/submain/signIn');
  }

  const goToSignUp = () => {
    history.push('/submain/signUp');
  }

  const goToFindPW = () => {
    history.push('/submain/findPW');
  }

  return (
    <div>
      <Button color="pink" onClick={goToSignIn}>입장하기</Button>

      <Switch>
        <Route path="/submain/signIn">
          <Modal close={goToSubmain}>
            로그인<br/>
            <SignIn/>
            <span onClick={goToSignUp}>회원 가입 하러 가기 | </span>
            <span onClick={goToFindPW}>비밀 번호 찾기</span>
          </Modal>
        </Route>
        <Route path="/submain/signUp">
          <Modal close={goToSubmain}>
            회원가입<br/>
            <SignUp/>
            <span onClick={goToSignIn}>로그인 하러 가기</span>
          </Modal>
        </Route>
        <Route path="/submain/findPW">
          <Modal close={goToSubmain}>
            비밀번호 찾기<br/>
            <FindPW/>
            <span onClick={goToSignIn}>로그인 하러 가기 | </span>
            <span onClick={goToSignUp}>회원 가입 하러 가기</span>
          </Modal>
        </Route>
        <Route path="/submain/setPW">
          <Modal close={goToSubmain}>
            비밀번호 설정
            <SetPW/>
          </Modal>
        </Route>
      </Switch>
    </div>
  );
};

export default Submain;