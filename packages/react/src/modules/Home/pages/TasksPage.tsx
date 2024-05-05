import type { FunctionComponent } from 'react';

import TaskList from '../components/TaskList';

const TasksPage: FunctionComponent = () => {
  return (
    <section>
      <h2 data-testid="page-title" className="home-title">
        tasks
      </h2>

      <div className="w-25 mx-auto">
        <TaskList />
      </div>
    </section>
  );
};

export default TasksPage;
