import { type FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import HomePage from '@/modules/Home/pages/HomePage';
import TasksPage from '@/modules/Home/pages/TasksPage';
import BaseEffectsPage from '@/modules/Home/pages/BaseEffectsPage';

const BaseDeferredValuePage = lazy(() => import('@/modules/Home/pages/BaseDeferredValuePage'));

const AppRouter: FunctionComponent = () => (
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
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
