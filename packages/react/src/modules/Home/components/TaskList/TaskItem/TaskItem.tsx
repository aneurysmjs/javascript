import { type FunctionComponent, memo } from 'react';
import classNames from 'classnames';

import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onChecked: (task: Task) => void;
}

const TaskIem: FunctionComponent<TaskItemProps> = ({ task, onChecked }) => {
  //  console.log('Render');
  return (
    <li
      data-testid="task-item"
      className={classNames('task-list__item', {
        'task-list__item--done': task.done,
      })}
    >
      <input
        type="checkbox"
        aria-label="check item"
        checked={task.done}
        onChange={() => onChecked(task)}
      />
      {task.description}
    </li>
  );
};

export default memo(TaskIem);
