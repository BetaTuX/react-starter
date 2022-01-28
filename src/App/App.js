import logo from '../logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import AppHeader from './AppHeader.js'
import React from "react";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <AppHeader/>
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage('fr')}>
          FR
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          EN
        </button>
        <img src={logo} className="App-logo motion-safe:animate-wiggle" alt="logo"/>
        <p>{t('hello-world')}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className={"App-header"}>
        <h1>Second screen</h1>
      </div>
    </div>
  );
}

export default App;
