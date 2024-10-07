import { type FC, memo } from 'react';
import classNames from 'classnames';

import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onChecked: (task: Task) => void;
}

const TaskIem: FC<TaskItemProps> = ({ task, onChecked }) => {
  //  console.log('Render');
  return (
    <li
      data-testid="task-item"
      className={classNames('task-list__item', {
        'line-through': task.done,
      })}
    >
      <input
        id={task.id}
        type="checkbox"
        aria-label="check item"
        checked={task.done}
        onChange={() => onChecked(task)}
      />
      <label htmlFor={task.id}>{task.description}</label>
    </li>
  );
};

export default memo(TaskIem);
