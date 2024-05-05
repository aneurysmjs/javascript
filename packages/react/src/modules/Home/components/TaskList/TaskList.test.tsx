import { render, screen, fireEvent } from '@testing-library/react';
import { within } from '@testing-library/dom';

import '@testing-library/jest-dom/extend-expect';

import TaskList from './TaskList';

describe('TaskList', () => {
  it('renders task list items', () => {
    const { queryAllByTestId } = render(<TaskList />);

    const items = queryAllByTestId('task-item');

    expect(items).toHaveLength(4);
  });

  it.skip('renders task list items', () => {
    const { queryAllByLabelText } = render(<TaskList />);

    const items = queryAllByLabelText('task-item');

    const checkbox = within(items[0]).queryAllByLabelText;

    console.log(checkbox);

    expect(items).toHaveLength(4);
  });

  it('adds a new task', () => {
    const { queryAllByTestId } = render(<TaskList />);

    const input = screen.queryByTestId('task-input');

    expect(queryAllByTestId('task-item')).toHaveLength(4);

    fireEvent.change(input!, { target: { value: 'yeah' } });
    fireEvent.keyDown(input!, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(queryAllByTestId('task-item')).toHaveLength(5);
  });
});
