import type { FC } from 'react';

import DashboardTabs from '../components/DashboardTabs';

const DashboardPage: FC = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        tasks
      </h2>

      <div className="w-25 mx-auto">
        <DashboardTabs />
      </div>
    </section>
  );
};

export default DashboardPage;
