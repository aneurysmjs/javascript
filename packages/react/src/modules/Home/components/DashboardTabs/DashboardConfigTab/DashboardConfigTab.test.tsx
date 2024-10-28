import { describe, it, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import useFetchConfigData from '../hooks/useFetchConfigData';
import DashboardConfigTab from './DashboardConfigTab';

jest.mock('../hooks/useFetchConfigData');

const mockUseFetchConfigData = useFetchConfigData as jest.Mocked<typeof useFetchConfigData>;

describe('DashboardConfigTab', () => {
  it('renders loading state', async () => {
    mockUseFetchConfigData.mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<DashboardConfigTab />);

    const loader = screen.getByRole('status');
    const error = screen.queryByRole('alert');
    const configItems = screen.queryAllByLabelText('config item');

    expect(loader).toBeInTheDocument();
    expect(configItems).toHaveLength(0);
    expect(error).not.toBeInTheDocument();
  });

  it('renders data', async () => {
    const mockData = [
      {
        id: 0,
        body: 'lorem ipsum',
      },
      {
        id: 1,
        body: 'dolor it samet',
      },
    ];

    mockUseFetchConfigData.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    render(<DashboardConfigTab />);

    const loader = screen.queryByRole('status');
    const error = screen.queryByRole('alert');
    const configItems = screen.queryAllByLabelText('config item');

    expect(loader).not.toBeInTheDocument();
    expect(configItems).toHaveLength(2);
    expect(error).not.toBeInTheDocument();
  });

  it('renders error', async () => {
    const mockData = [
      {
        id: 0,
        body: 'lorem ipsum',
      },
      {
        id: 1,
        body: 'dolor it samet',
      },
    ];

    mockUseFetchConfigData.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: new Error('some went wrong'),
    });

    render(<DashboardConfigTab />);

    const loader = screen.queryByRole('status');
    const error = screen.queryByRole('alert');
    const configItems = screen.queryAllByLabelText('config item');

    expect(loader).not.toBeInTheDocument();
    expect(configItems).toHaveLength(2);
    expect(error).toBeInTheDocument();
  });
});
