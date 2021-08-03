import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const ChatHeader = () => {
  const { toggleSidenav } = useActions();
  const { mode, expanded } = useTypedSelector((state) => state.dashboard);
  const { header } = useTypedSelector((state) => state.chats);
  const { imgUrl, firstName } = header!;

  const bar = `bar ${expanded ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <div key={i} className={bar} />);

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };
  return (
    <div className={`chat__header ${mode}`}>
      <div className='chat__header__imgUrl'>
        <img src={`${s3Url}/${imgUrl}`} alt='' />
      </div>
      <span>{firstName}</span>
      <div className={`menu-bars ${mode}`} onClick={toggle}>
        {bars}
      </div>
    </div>
  );
};
