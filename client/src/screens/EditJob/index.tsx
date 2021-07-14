import React from "react";
import { useTypedSelector } from "hooks/use-typed-selector";
import { JobForm } from "components/forms/job-form";
import { useHistory } from "react-router-dom";
import { ErrorsContainer } from "components/common/ErrorsContainer";
import { useActions } from "hooks/use-actions";

export const EditJob = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { setSelectedJob } = useActions();
  const history = useHistory();
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  let x = history.location.pathname.split("/")[2];
  console.log(x);

  React.useEffect(() => {
    if (!me) history.push("/dashboard/profile-form");
  }, [me, history]);

  return (
    <div className="post-job">
      <div className={`post-job__header ${mode}`}>
        <h2> Edit Job </h2>
      </div>
      <div className="post-job__main">
        <JobForm />
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
