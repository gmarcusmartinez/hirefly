import { FC } from 'react';

interface IProps {
  step: number;
}
export const PostJobSteps: FC<IProps> = ({ step }) => {
  const backgroundColor = '#838dec';
  return (
    <div className='post-job__steps'>
      <div>
        <h3>Details</h3>
        <span style={{ backgroundColor }}></span>
      </div>
      <div>
        <h3>Salary / Loc.</h3>
        <span style={step >= 1 ? { backgroundColor } : {}}></span>
      </div>
      <div>
        <h3>Image / Desc.</h3>
        <span style={step >= 2 ? { backgroundColor } : {}}></span>
      </div>
      <div>
        <h3>Skills</h3>
        <span></span>
      </div>
    </div>
  );
};
