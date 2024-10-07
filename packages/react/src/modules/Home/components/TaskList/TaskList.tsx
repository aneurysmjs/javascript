import {
  type FC,
  type KeyboardEventHandler,
  type ChangeEventHandler,
  useState,
  useId,
} from 'react';

import type { Task, TaskList } from './types';
import TaskItem from './TaskItem';

import './TaskList.css';

const sortTasks = (taskA: Task, taskB: Task) => {
  if (taskA.done === taskB.done) {
    return taskB.created - taskA.created;
  }

  return +taskA.done - +taskB.done;
};

const tasksDummy: Task[] = [
  { id: '1', description: 'Prepare for the interview', done: true, created: 1603450754 },
  { id: '2', description: 'Do an awesome task', done: false, created: 1603450554 },
  { id: '3', description: 'Be nice', done: false, created: 1603450354 },
  { id: '4', description: 'Get hired', done: false, created: 1603450154 },
];

const TaskList: FC = () => {
  const [tasks, setTasks] = useState(tasksDummy);
  const [text, setText] = useState('');
  const newId = useId();

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'Enter') {
      setTasks((prev) => {
        return [
          ...prev,
          {
            id: newId,
            description: text,
            done: false,
            created: new Date().getTime(),
          },
        ];
      });

      setText('');
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setText(evt.target.value);
  };

  const handleChecked = (taskToEdit: Task) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (taskToEdit.created === task.created) {
          return {
            ...taskToEdit,
            done: !task.done,
          };
        }

        return task;
      });
    });
  };

  return (
    <div>
      <input
        data-testid="task-input"
        type="text"
        placeholder="write task"
        className="home__input-search"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      <ul>
        {tasks.sort(sortTasks).map((task, idx) => (
          <TaskItem key={`${task.id}-${idx}`} task={task} onChecked={handleChecked} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
