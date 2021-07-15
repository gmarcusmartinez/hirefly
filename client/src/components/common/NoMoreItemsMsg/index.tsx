import { useTypedSelector } from 'hooks/use-typed-selector';

export const NoItems = ({ type }: { type?: string }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const message =
    type === 'applicant'
      ? 'There are currently no applicants for this posting.'
      : 'There are currently no new jobs.';

  return (
    <div className={`no-items ${mode}`}>
      <span>{message}</span>
    </div>
  );
};
