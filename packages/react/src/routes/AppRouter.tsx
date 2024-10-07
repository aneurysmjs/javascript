import { type FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import HomePage from '@/modules/Home/pages/HomePage';
import TasksPage from '@/modules/Home/pages/TasksPage';
import BaseEffectsPage from '@/modules/Home/pages/BaseEffectsPage';

const BaseDeferredValuePage = lazy(() => import('@/modules/Home/pages/BaseDeferredValuePage'));
const DashboardPage = lazy(() => import('@/modules/Home/pages/DashboardPage'));

const AppRouter: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/base-effects" element={<BaseEffectsPage />} />
        <Route
          path="/deferred-value"
          element={
            <Suspense>
              <BaseDeferredValuePage />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense>
              <DashboardPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
