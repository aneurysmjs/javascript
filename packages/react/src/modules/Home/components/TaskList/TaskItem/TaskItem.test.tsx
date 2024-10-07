import { render, fireEvent } from '@testing-library/react';
// import { within } from '@testing-library/dom';

import '@testing-library/jest-dom/extend-expect';

import TaskItem from './TaskItem';

describe('TaskItem', () => {
  it('checks item', () => {
    const task = {
      id: '1',
      description: 'yeah',
      done: false,
      created: new Date().getTime(),
    };

    const mockOnChecked = jest.fn();
    const { getByLabelText, getByTestId, rerender } = render(
      <TaskItem task={task} onChecked={mockOnChecked} />,
    );

    const taskItem = getByTestId('task-item');
    const checkbox = getByLabelText('check item');

    expect(mockOnChecked).not.toHaveBeenCalled();
    expect(taskItem).not.toHaveClass('task-list__item--done');

    fireEvent.click(checkbox);

    expect(mockOnChecked).toHaveBeenCalledWith(task);

    rerender(<TaskItem task={{ ...task, done: true }} onChecked={mockOnChecked} />);

    expect(taskItem).toHaveClass('task-list__item--done');
  });
});
