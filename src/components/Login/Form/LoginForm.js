import React, {useEffect, useState} from 'react';
import Button from "../../Buttons/Button";
import {useTranslation} from "react-i18next";

export default function LoginForm(props) {
  const {t} = useTranslation();

  const validateButtonRef = props.validationBtnRef;
  const [linked, setLinked] = useState(false);

  useEffect(() => {
    validateButtonRef?.current?.addEventListener('click', handleSubmit);
    setLinked(validateButtonRef?.current !== undefined);
    return () => {
      validateButtonRef?.current?.removeEventListener('click', handleSubmit);
    };
  });

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Entered values are: ', {mail, pass});
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required
                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder={t('action.enter-field', {field: t('field.mail').toLowerCase()})} onChange={({target}) => {
            setMail(target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required
                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder={t('action.enter-field', {field: t('field.pass').toLowerCase()})} onChange={({target}) => {
            setPass(target.value)
          }}/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox"
                 className="h-4 w-4 focus:purple border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            {t('field.remember')}
          </label>
        </div>
      </div>

      <div>
        <Button type="submit" hidden={linked}>
          Sign in
        </Button>
      </div>
    </form>
  );
}
