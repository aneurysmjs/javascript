import { type FunctionComponent, memo } from 'react';
import classNames from 'classnames';

import type { Task } from '../types';

interface TaskItemProps extends Task {
  onChecked: (task: Task) => void;
}

const TaskIem: FunctionComponent<TaskItemProps> = ({ done, created, description, onChecked }) => {
  console.log('Render');

  return (
    <li
      data-testid="task-item"
      className={classNames('task-list__item', {
        'task-list__item--done': done,
      })}
    >
      <input
        type="checkbox"
        aria-label="check item"
        checked={done}
        onChange={() => onChecked({ done, created, description })}
      />
      {description}
    </li>
  );
};

export default memo(TaskIem);
