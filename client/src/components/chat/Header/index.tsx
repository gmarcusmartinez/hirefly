import { s3Url } from 'api/s3url';
import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';

export const ChatHeader = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { header } = useTypedSelector((state) => state.chats);
  const { avatar, firstName } = header!;

  const src = `${s3Url}/${avatar}`;
  return (
    <div className={`chat__header ${mode}`}>
      <div className='chat__header__avatar'>
        <img src={src} alt='' />
      </div>
      <span>{firstName}</span>
      <i className='material-icons'>close</i>
    </div>
  );
};
