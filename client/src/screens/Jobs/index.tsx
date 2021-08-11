import { useEffect } from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { Spinner } from 'components/common/Spinner';
import { NoItems } from 'components/common/NoMoreItemsMsg';
import { Container, List } from './styles';

export const Jobs = () => {
  const { items, loading, current } = useTypedSelector(({ jobs }) => jobs);
  const { clearJobs, getAllJobs, apply, declineJob } = useActions();

  useEffect(() => {
    getAllJobs();
    return () => {
      clearJobs();
    };
  }, [getAllJobs, clearJobs]);

  const last = items.length - 1;
  const approve = (jobId: string) => apply({ current, last, jobId });
  const decline = (jobId: string) => declineJob({ current, last, jobId });

  const list = items.map((item: IJob) => (
    <SwiperCard
      key={item._id}
      doc={item}
      docType='job'
      approve={approve}
      decline={decline}
    />
  ));

  if (loading) return <Spinner />;
  if (!items.length) return <NoItems type='jobs' />;

  return (
    <Container>
      <List>{list}</List>
      {list[current]}
    </Container>
  );
};
