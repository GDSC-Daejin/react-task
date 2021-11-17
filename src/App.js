import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const introduceText = 'GDSC(Google Developer Student Clubs)은 Google Developers에서 제공하는 프로그램으로, 대학교를 기반으로 하는 개발자 커뮤니티그룹입니다. \n'
      + 'GDSC의 멤버들은 peer-to-peer 학습 환경에서 역량을 키우고 공동체와 지역사회를 위한 솔루션 구축을 목표로 합니다. \n'
      + '현재 GDSC Korea는 21명의 Lead를 주축으로 21개 대학교에 선발되었으며, 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다.'
      + '학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트 참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스,워크샵을 통해 역량을 높일 수 있도록 돕습니다. ';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
