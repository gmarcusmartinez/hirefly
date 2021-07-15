import { JobDetails } from './JobDetails';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

interface IProps {
  docType: string;
  doc: any;
  next: Function;
}
export const SwiperCard: FC<IProps> = ({ docType, doc, next }) => {
  const { createApplication, updateApplication } = useActions();
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  const background =
    docType === 'job' ? `url(${doc.imgUrl})` : `url(${doc.avatar})`;

  const handleApprove = () => {
    next();
    return docType === 'job'
      ? createApplication(doc._id)
      : updateApplication(doc._id, 'approved');
  };

  const handleDeny = () => {
    next();
    return docType === 'job' ? null : updateApplication(doc._id, 'denied');
  };

  return (
    <div className={`swiper-card ${mode}`}>
      <div className='swiper-card__img' style={{ background }}></div>
      {docType === 'job' && <JobDetails job={doc} />}
      <div className='swiper-card__actions'>
        <div className='swiper-card__deny' onClick={handleDeny}>
          <i className='material-icons'>cancel</i>
        </div>
        <div className='swiper-card__approve' onClick={handleApprove}>
          <i className='material-icons'>check_circle</i>
        </div>
      </div>
    </div>
  );
};
