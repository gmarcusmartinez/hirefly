import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';

interface IProps {
  step: number;
}
export const ProfileSteps: FC<IProps> = ({ step }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);

  return (
    <div className={`profile-form__steps ${mode}`}>
      <div>
        <h3>Basic Info</h3>
        <span style={{ width: '100%' }}></span>
      </div>
      <div>
        <h3>Image / Bio.</h3>
        <span style={step >= 1 ? { width: '100%' } : {}}></span>
      </div>
      <div>
        <h3>Skills</h3>
        <span style={step >= 2 ? { width: '100%' } : {}}></span>
      </div>
    </div>
  );
};
