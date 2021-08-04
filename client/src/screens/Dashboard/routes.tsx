import * as s from 'screens';
import { Route, Switch } from 'react-router-dom';
import { RecruiterRoute } from 'components/common/ProtectedRoute/RecruiterRoute';
import { ApplicantRoute } from 'components/common/ProtectedRoute/ApplicantRoute';

export const DashboardRoutes = () => {
  return (
    <Switch>
      <RecruiterRoute path='/dashboard/applicants' component={s.Applicants} />
      <RecruiterRoute path='/dashboard/edit-job' component={s.EditJob} />
      <RecruiterRoute path='/dashboard/post-job' component={s.PostJob} />
      <RecruiterRoute path='/dashboard/my-jobs' component={s.MyJobs} />

      <Route path='/dashboard/messenger' component={s.Chat} />
      <Route path='/dashboard/create-profile' component={s.CreateProfile} />
      <Route path='/dashboard/edit-profile' component={s.EditProfile} />
      <Route path='/dashboard/notifications' component={s.Notifications} />
      <Route path='/dashboard/signout' component={s.Signout} />

      <ApplicantRoute path='/dashboard/jobs' component={s.Jobs} />
    </Switch>
  );
};
