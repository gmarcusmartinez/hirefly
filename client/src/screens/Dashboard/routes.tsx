import { Route, Switch } from 'react-router-dom';
import * as s from 'screens';

export const DashboardRoutes = () => {
  return (
    <Switch>
      <Route path='/dashboard/applicants' component={s.Applicants} />
      <Route path='/dashboard/connections' component={s.Chat} />
      <Route path='/dashboard/create-profile' component={s.CreateProfile} />
      <Route path='/dashboard/edit-job' component={s.EditJob} />
      <Route path='/dashboard/edit-profile' component={s.EditProfile} />
      <Route path='/dashboard/jobs' component={s.Jobs} />
      <Route path='/dashboard/job-form' component={s.PostJob} />
      <Route path='/dashboard/my-jobs' component={s.MyJobs} />
      <Route path='/dashboard/notifications' component={s.Notifications} />
      <Route path='/dashboard/signout' component={s.Signout} />
    </Switch>
  );
};
