import type { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import HomePage from '@/modules/Home/pages/HomePage';
import TasksPage from '@/modules/Home/pages/TasksPage';
import BaseEffectsPage from '@/modules/Home/pages/BaseEffectsPage';

const AppRouter: FunctionComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/base-effects" element={<BaseEffectsPage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
