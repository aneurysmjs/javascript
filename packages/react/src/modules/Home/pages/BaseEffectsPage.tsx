import type { FunctionComponent } from 'react';

import BaseEffects from '../components/BaseEffects';

const BaseEffectsPage: FunctionComponent = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        effects
      </h2>

      <div className="w-25 mx-auto">
        <BaseEffects />
      </div>
    </section>
  );
};

export default BaseEffectsPage;
