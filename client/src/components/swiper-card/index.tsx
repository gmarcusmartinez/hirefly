import { JobDetails } from './JobDetails';
import { FC } from 'react';

interface IProps {
  docType: string;
  doc: any;
  handleApprove: Function;
  handleDeny: Function;
}
export const SwiperCard: FC<IProps> = ({
  docType,
  doc,
  handleApprove,
  handleDeny,
}) => {
  const background =
    docType === 'job' ? `url(${doc.imgUrl})` : `url(${doc.avatar})`;

  return (
    <div className='swiper-card'>
      <div className='swiper-card__img' style={{ background }}></div>
      {docType === 'job' && <JobDetails />}
      <div className='swiper-card__actions'>
        <div className='swiper-card__deny' onClick={() => handleDeny()}>
          <i className='material-icons'>cancel</i>
        </div>
        <div className='swiper-card__approve' onClick={() => handleApprove()}>
          <i className='material-icons'>check_circle</i>
        </div>
      </div>
    </div>
  );
};
