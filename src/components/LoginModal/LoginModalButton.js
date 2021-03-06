import React, {createRef, Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import LoginForm from "../Login/Form/LoginForm";
import ActionButton from "../Buttons/ActionButton";
import Button from "../Buttons/Button";
import {LoginIcon} from "@heroicons/react/outline";
import {useTranslation} from "react-i18next";

function LoginModalButton() {

  const {t} = useTranslation();

  const [open, setOpen] = useState(false)

  const validateBtnRef = createRef();
  const cancelButtonRef = useRef(null)

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <ActionButton narrow icon={LoginIcon} onClick={openModal}>{t('auth.login')}</ActionButton>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef}
                onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center md:flex sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-50 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-50 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block m-auto align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start px-2">
                    <div
                      className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
                      <LoginIcon className="h-6 w-6 text-purple-600" aria-hidden="true"/>
                    </div>
                    <div className="flex-grow-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {t('auth.login')}
                      </Dialog.Title>
                      <div className="mt-2 px-1">
                        <LoginForm validationBtnRef={validateBtnRef} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <ActionButton ref={validateBtnRef} onClick={closeModal}>{t('auth.login')}</ActionButton>
                  <Button onClick={closeModal}>{t('action.cancel')}</Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default LoginModalButton;
