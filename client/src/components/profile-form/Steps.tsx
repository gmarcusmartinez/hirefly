import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';
import { Container, Step, Title, Bar } from 'components/common/Step';

interface IProps {
  step: number;
}
export const ProfileSteps: FC<IProps> = ({ step }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);

  return (
    <Container className={mode}>
      <Step>
        <Title>Basic Info</Title>
        <Bar style={{ width: '100%' }}></Bar>
      </Step>
      <Step>
        <Title>Image / Bio.</Title>
        <Bar style={step >= 1 ? { width: '100%' } : {}}></Bar>
      </Step>
      <Step>
        <Title>Skills</Title>
        <Bar style={step >= 2 ? { width: '100%' } : {}}></Bar>
      </Step>
    </Container>
  );
};
