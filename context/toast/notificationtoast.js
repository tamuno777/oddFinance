import React from 'react';
import { ToastMessage } from 'react-native-toast-message';
// import { ToastProvider as BaseToastProvider, ToastMessage } from 'react-native-toast-message';

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastMessage autoHide={5000} topOffset={40} />
    </>
  );
};

export default ToastProvider;
