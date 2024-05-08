import type { FunctionComponent } from 'react';

import BaseDeferredValue from '../components/BaseDeferredValue';

const BaseDeferredValuePage: FunctionComponent = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        deferred value
      </h2>

      <div className="w-25 mx-auto">
        <BaseDeferredValue />
      </div>
    </section>
  );
};

export default BaseDeferredValuePage;
