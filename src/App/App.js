import logo from '../logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => changeLanguage('fr')}>
          FR
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          EN
        </button>
        <img src={logo} className="App-logo" alt="logo"/>
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
      </header>
    </div>
  );
}

export default App;
