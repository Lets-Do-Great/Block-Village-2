import React from 'react';
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import Modal from '../../../components/modal/modal';

const MyPage = () => {
  const history = useHistory();

  const goToMyPage = () => {
    history.goBack();
  }

  const goToInfoRead = () => {
    history.push('/me/info/read');
  }

  const goToInfoUpdate = () => {
    history.push('/me/info/update');
  }

  const goToMyBlock = () => {
    history.push('/me/block');
  }

  const goToMyMission = () => {
    history.push('/me/mission');
  }

  const goToMyMissionDetail= () => {
    history.push('/me/info/update');
  }

  const goToMyAnswer = () => {
    history.push('/me/answer');
  }

  const goToMyAnswerDetail = () => {
    history.push('/me/mission');
  }

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
          <Modal close={goToMyPage}>
            내 정보 조회 / 수정
          </Modal>
        </Route>
        <Route path="/me/block">
          <Modal size="large" close={goToMyPage}>
            내 블록 목록
          </Modal>
        </Route>
        <Route path="/me/:type/:id">
          <Modal size="large" close={goToMyPage}>
            내 미션 / 답안 상세페이지
          </Modal>
        </Route>
        <Route path="/me/:type">
          <Modal size="large" close={goToMyPage}>
            내 미션 / 답안 목록 
          </Modal>
        </Route>
      </Switch>
    </div>
  );
};

export default MyPage;