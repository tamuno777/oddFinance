import React from 'react';
import { ToastProvider as BaseToastProvider, ToastMessage } from 'react-native-toast-message';

const ToastProvider = ({ children }) => {
  return (
    <BaseToastProvider>
      {children}
      <ToastMessage autoHide={5000} topOffset={40} />
    </BaseToastProvider>
  );
};

export default ToastProvider;
