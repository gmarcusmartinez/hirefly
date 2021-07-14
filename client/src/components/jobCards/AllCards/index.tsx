import React from "react";
import { SingleCard } from "../SingleCard";
import { useActions } from "hooks/use-actions";
import { useTypedSelector } from "hooks/use-typed-selector";

export const AllCards: React.FC<{}> = () => {
  const { getPostedJobs } = useActions();
  const { jobs: items } = useTypedSelector(({ jobs }) => jobs);

  React.useEffect(() => {
    getPostedJobs();
  }, [getPostedJobs]);

  const listOfJobs = items?.map((j, k) => <SingleCard job={j} key={k} />);

  return <div className="all-cards-container">{listOfJobs}</div>;
};
