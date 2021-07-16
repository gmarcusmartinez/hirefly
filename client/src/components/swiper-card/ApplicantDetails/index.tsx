import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { FC } from 'react';

interface IProps {
  applicant: any;
}
export const ApplicantDetails: FC<IProps> = ({ applicant }) => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { firstName, lastName } = applicant;
  const name = `${firstName} ${lastName}`;
  return (
    <div className={`applicant-details ${mode} fade-out`}>
      <div className='applicant-details__title'>
        <h2>{name}</h2>
      </div>
      {applicant.bio && <span>{applicant.bio}</span>}
      {applicant.location && <span>Location: {applicant.location}</span>}
    </div>
  );
};
