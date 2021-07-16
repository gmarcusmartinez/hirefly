import { JobDetails } from './JobDetails';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { s3Url } from 'api/s3url';

interface IProps {
  docType: string;
  doc: any;
  approve: Function;
  decline: Function;
}
export const SwiperCard: FC<IProps> = ({ docType, doc, approve, decline }) => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  let background;

  if (docType === 'job') {
    if (doc.imgUrl.startsWith('http')) background = `url(${doc.imgUrl})`;
    else background = `url(${s3Url}/${doc.imgUrl})`;
  }

  if (docType === 'applicant') {
    if (doc.applicantProfile.avatar.startsWith('http'))
      background = `url(${doc.applicantProfile.avatar})`;
    else background = `url(${s3Url}/${doc.applicantProfile.avatar})`;
  }

  return (
    <div className={`swiper-card ${mode}`}>
      <div className='swiper-card__img' style={{ background }}></div>
      {docType === 'job' && <JobDetails job={doc} />}
      <div className='swiper-card__actions'>
        <div className='swiper-card__deny' onClick={() => decline(doc._id)}>
          <i className='material-icons'>cancel</i>
        </div>
        <div className='swiper-card__approve' onClick={() => approve(doc._id)}>
          <i className='material-icons'>check_circle</i>
        </div>
      </div>
    </div>
  );
};
