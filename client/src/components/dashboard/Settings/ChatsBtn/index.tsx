import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

export const ChatsBtn = () => {
  const { mode, expanded } = useTypedSelector((state) => state.dashboard);
  const { setSidenavComponent } = useActions();
  const handleClick = () => setSidenavComponent('MESSAGES');

  const className = `settings__chats-btn`;
  const iclassName = `material-icons ${mode}`;
  const displayText = !expanded ? 'hide-text' : 'display-text';

  return (
    <div className={className} onClick={handleClick}>
      {!expanded && <i className={iclassName}>search</i>}
      <span className={`${displayText} ${mode}`}>Jobs</span>
    </div>
  );
};
