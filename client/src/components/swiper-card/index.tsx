import { JobDetails } from './JobDetails';
import { ApplicantDetails } from './ApplicantDetails';
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
    background = doc.imgUrl.startsWith('http')
      ? `url(${doc.imgUrl})`
      : `url(${s3Url}/${doc.imgUrl})`;
  }
  if (docType === 'applicant') {
    background = doc.applicantProfile.imgUrl.startsWith('http')
      ? `url(${doc.applicantProfile.imgUrl})`
      : `url(${s3Url}/${doc.applicantProfile.imgUrl})`;
  }

  return (
    <div className={`swiper-card ${mode}`}>
      <div className='swiper-card__img' style={{ background }}></div>
      {docType === 'job' && <JobDetails job={doc} />}
      {docType === 'applicant' && (
        <ApplicantDetails applicant={doc.applicantProfile} />
      )}
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
