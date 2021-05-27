import { useActions } from 'hooks/use-actions';

export const Theme = ({ t }: { t: string }) => {
  const { setTheme } = useActions();
  return (
    <div key={t} style={{ backgroundColor: t }} onClick={() => setTheme(t)} />
  );
};
