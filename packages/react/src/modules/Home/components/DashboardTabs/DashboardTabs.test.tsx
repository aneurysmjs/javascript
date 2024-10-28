import { describe, it, expect } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import DashboardTabs from './DashboardTabs';

describe('DashboardTabs', () => {
  it('should render default content', async () => {
    render(<DashboardTabs />);

    const tab1 = screen.getByLabelText('tab 1 content');

    expect(tab1).toBeInTheDocument();
  });

  it('should render "Panel" tab', async () => {
    render(<DashboardTabs />);

    const configTabButton = screen.getByText('Panel');

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('dashboard panel')).not.toBeInTheDocument();
    expect(configTabButton).toBeInTheDocument();

    fireEvent.click(configTabButton);

    expect(screen.queryByRole('status')).toBeInTheDocument();
    expect(screen.queryByLabelText('dashboard panel')).not.toBeInTheDocument();

    // wait for the the promise of the dynamic import to resolve
    await waitFor(() => {
      expect(screen.queryByLabelText('dashboard panel')).toBeInTheDocument();
    });
  });
});
