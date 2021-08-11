import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';
import { Container, Step, Title, Bar } from 'components/common/Step';
interface IProps {
  step: number;
}
export const PostJobSteps: FC<IProps> = ({ step }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  return (
    <Container className={mode}>
      <Step>
        <Title>Details</Title>
        <Bar style={{ width: '100%' }}></Bar>
      </Step>
      <Step>
        <Title>Salary / Loc.</Title>
        <Bar style={step >= 1 ? { width: '100%' } : {}}></Bar>
      </Step>
      <Step>
        <Title>Image / Desc.</Title>
        <Bar style={step >= 2 ? { width: '100%' } : {}}></Bar>
      </Step>
      <Step>
        <Title>Skills</Title>
        <Bar style={step >= 3 ? { width: '100%' } : {}}></Bar>
      </Step>
    </Container>
  );
};
