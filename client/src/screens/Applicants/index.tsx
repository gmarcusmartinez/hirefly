import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { SocketContext } from 'context/socket';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { Spinner } from 'components/common/Spinner';
import { NoItems } from 'components/common/NoMoreItemsMsg';
import { Container, List } from './styles';

export const Applicants = () => {
  const socket = React.useContext(SocketContext);
  const { fetchApplications, nextApplication, setSelectedJob } = useActions();
  const { selected } = useTypedSelector(({ jobs }) => jobs);
  const { items, loading, current } = useTypedSelector(
    ({ applications }) => applications
  );

  React.useEffect(() => {
    fetchApplications(selected!._id);
    return () => {
      setSelectedJob(null);
    };
  }, [fetchApplications, setSelectedJob, selected]);

  const last = items.length - 1;
  const jobId = selected!._id;

  const approve = (id: string) => {
    nextApplication({ current, last, id, status: 'accepted', jobId });
    socket.emit('application accepted', items[current].applicant);
  };

  const decline = (id: string) =>
    nextApplication({ current, last, id, status: 'declined', jobId });

  const list = items.map((item: any) => (
    <SwiperCard
      key={item._id}
      doc={item}
      docType='applicant'
      approve={approve}
      decline={decline}
    />
  ));

  if (loading) return <Spinner />;
  if (!items.length) return <NoItems type='applicant' />;

  return (
    <Container>
      <List>{list}</List>
      {list[current]}
    </Container>
  );
};
