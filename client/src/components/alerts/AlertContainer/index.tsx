import React from 'react';
import { AlertItem } from 'components/alerts/AlertItem';

const mockAlerts = [
  { type: 'success', message: 'Application Sent!' },
  { type: 'error', message: 'Application Unsuccessful' },
];

export const AlertContainer = () => {
  let list = mockAlerts.map((a) => <AlertItem alert={a} />);
  return <div className='alert-container'>{list}</div>;
};
