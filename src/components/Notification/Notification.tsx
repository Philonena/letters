import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { closeNotification, notification } from 'store/slices/notificationSlice';

export const Notification: React.FC = () => {
  const { isShow, text, severity } = useAppSelector(notification);
  const dispatch = useAppDispatch();

  const onCloseNotification = () => {
    dispatch(closeNotification());
  };

  return (
    <Snackbar open={isShow} autoHideDuration={2000} onClose={onCloseNotification}>
      <Alert onClose={onCloseNotification} severity={severity} variant="filled">
        {text}
      </Alert>
    </Snackbar>
  );
};
