import { MemoryRouter } from 'react-router-dom'; // Provides context for Link
import { render, fireEvent, screen } from '@testing-library/react';
import { EditButton } from './EditButton'; // replace with the actual import path

describe('EditButton Component', () => {
  const id = 1;

  const setup = () => {
    render(
      <MemoryRouter>
        <EditButton id={id} />
      </MemoryRouter>
    );
  };

  afterAll(() => {
    vi.clearAllMocks();
  });

  test('renders EditButton', () => {
    setup();
    const editButton = screen.getByText(/edit/i);
    expect(editButton).toBeInTheDocument();
  });

  test('Link points to the correct path', () => {
    setup();
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/detail/${id}`);
  });

  test('clicks EditButton', () => {
    setup();
    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/detail/${id}`);
  });
});
