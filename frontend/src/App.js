import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/main/index/main';
import SubMain from './pages/submain/submain';
import MyPage from './pages/mypage/myPage';
import Store from './pages/store/index/store';
import Block from './pages/block/index/block';
import Tutorial from './pages/tutorial/tutorial';
import Mission from './pages/mission/index/mission';
import Service from './pages/service/service';
import Group from './pages/group/index/group';
import Streaming from './pages/streaming/index/streaming';
import Error from './pages/error/error';

const App = () => {
  const list = [
    { path:"/", name: "메인"},
    { path:"/submain", name: "서브 메인"},
    { path:"/me", name: "마이 페이지"},
    { path:"/store", name: "상점"},
    { path:"/block", name: "블록 제작 화면"},
    { path:"/tutorial/1", name: "튜토리얼"},
    { path:"/mission", name: "미션"},
    { path:"/service", name: "서비스 소개"},
    { path:"/group", name: "그룹"},
    { path:"/streaming/1/1", name: "스트리밍"},
    { path:"/error", name: "에러"},
  ];

  return (<>
    <ul>
    {
      list.map(item => <li key={item.name}><Link to={item.path}>{item.name}</Link></li>)
    }
    </ul>
    <Switch>
      <Route path="/" exact={true}>
        <Main/>
      </Route>
      <Route path="/submain">
        <SubMain/>
      </Route>
      <Route path="/me">
        <MyPage/>
      </Route>
      <Route path="/store">
        <Store/>
      </Route>
      <Route path="/block">
        <Block/>
      </Route>
      <Route path="/tutorial/:step">
        <Tutorial/>
      </Route>
      <Route path="/mission">
        <Mission/>
      </Route>
      <Route path="/service">
        <Service/>
      </Route>
      <Route path="/group">
        <Group/>
      </Route>
      <Route path="/streaming/:roomId/:memberId">
        <Streaming/>
      </Route>
      <Route>
        <Error/>
      </Route>
    </Switch>
  </>);
};

export default App;