import {
  type FunctionComponent,
  type KeyboardEventHandler,
  type ChangeEventHandler,
  useState,
  useCallback,
} from 'react';

import type { Task, TaskList } from './types';
import TaskIem from './TaskItem';

import './TaskList.css';

const sortTasks = (taskA: Task, taskB: Task) => {
  if (taskA.done === taskB.done) {
    return taskB.created - taskA.created;
  }

  return +taskA.done - +taskB.done;
};

const tasksDummy: Task[] = [
  { description: 'Prepare for the interview', done: true, created: 1603450754 },
  { description: 'Do an awesome task', done: false, created: 1603450554 },
  { description: 'Be nice', done: false, created: 1603450354 },
  { description: 'Get hired', done: false, created: 1603450154 },
];

const TaskList: FunctionComponent = () => {
  const [tasks, setTasks] = useState(tasksDummy);
  const [text, setText] = useState('');
  const [, rerender] = useState();
  const [count, setCount] = useState(0);

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'Enter') {
      setTasks((prev) => {
        return [
          ...prev,
          {
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

  // const handleChecked = (taskToEdit: Task) => {
  //   setTasks((prev) => {
  //     return prev.map((task) => {
  //       if (taskToEdit.created === task.created) {
  //         return {
  //           ...taskToEdit,
  //           done: !task.done,
  //         };
  //       }

  //       return task;
  //     });
  //   });
  // };

  const handleChecked = useCallback((taskToEdit: Task) => {
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
  }, []);

  const handleCount = () => {
    setCount((c) => (c += 1));
  };

  return (
    <div>
      {count}
      <button type="button" onClick={() => handleCount()}>
        inc
      </button>
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
          <TaskIem key={`${task.description}-${idx}`} {...task} onChecked={handleChecked} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
