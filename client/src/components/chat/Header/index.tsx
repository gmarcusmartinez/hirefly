import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { MenuBars, Bar } from 'components/common/MenuBars';
export const ChatHeader = () => {
  const { toggleSidenav } = useActions();
  const { mode, expanded } = useTypedSelector((state) => state.dashboard);
  const { header } = useTypedSelector((state) => state.chats);

  const bar = `bar ${expanded ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <Bar className={bar} />);

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };
  return (
    <div className={`chat__header ${mode}`}>
      {header?.imgUrl && header?.firstName && (
        <>
          <div className='chat__header__imgUrl'>
            <img src={`${s3Url}/${header.imgUrl}`} alt='' />
          </div>
          <span>{header.firstName}</span>
        </>
      )}
      <MenuBars color={mode} onClick={toggle}>
        {bars}
      </MenuBars>
    </div>
  );
};
