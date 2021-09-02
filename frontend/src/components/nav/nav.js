import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const list = [
    { path:"/", name: "메인"},
    { path:"/me", name: "마이 페이지"},
    { path:"/store", name: "상점"},
    { path:"/block", name: "블록 제작 화면"},
    { path:"/tutorial/1", name: "튜토리얼"},
    { path:"/mission", name: "미션"},
    { path:"/service", name: "서비스 소개"},
    { path:"/group", name: "그룹"},
  ];

  return (
  <nav>
  {
    list.map(item => <Link to={item.path}>{item.name} | </Link>)
  }
  </nav>);
}

export default Nav;