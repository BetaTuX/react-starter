import React from 'react';
import './AppHeader.css'
import {useTranslation} from 'react-i18next';
import PlusSmIcon from '@heroicons/react/solid/PlusSmIcon';
import LoginModalButton from '../components/LoginModal/LoginModalButton';
import LinkButton from "../components/Buttons/LinkButton";

function AppHeader() {
  const {t} = useTranslation();

  return (
    <div className={'app-header h-0 sticky top-0'}>
      <header className={'shadow frosted absolute w-full'}>
        <div className={'wrapper flex w-[1024px] px-3 py-2 m-auto'}>
          <div className={'left m-auto flex-none'}>
            <h1 className={'text-xl text-white'}>{t('nav.home.task')}-<span>{t('nav.home.inator')}</span></h1>
          </div>
          <div className={'right flex justify-end flex-auto m-auto'}>
            <nav className="flex flex-row">
              <LinkButton narrow>{t('nav.about')}</LinkButton>
              <LinkButton narrow icon={PlusSmIcon}>{t('nav.new-task')}</LinkButton>
            </nav>
            <div className="flex flex-row">
              <LoginModalButton/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AppHeader;
