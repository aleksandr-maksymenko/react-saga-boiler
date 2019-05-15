import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes';

import PageHome from 'pages/PageHome';

export const PageRoot: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={routes.home} component={PageHome} />
        <Route exact render={() => <p>Page not found</p>} />
      </Switch>
    </Suspense>
  );
};
