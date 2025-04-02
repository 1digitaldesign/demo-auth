import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the return to top link', () => {
    render(<Footer />);
    const returnToTopLink = screen.getByRole('link', { name: /Return to top/i });
    expect(returnToTopLink).toBeInTheDocument();
  });

  it('renders the primary links', () => {
    render(<Footer />);
    const primaryLink1 = screen.getByRole('link', { name: /Primary Link 1/i });
    const primaryLink2 = screen.getByRole('link', { name: /Primary Link 2/i });
    const primaryLink3 = screen.getByRole('link', { name: /Primary Link 3/i });

    expect(primaryLink1).toBeInTheDocument();
    expect(primaryLink2).toBeInTheDocument();
    expect(primaryLink3).toBeInTheDocument();
  });

  it('renders the agency name', () => {
    render(<Footer />);
    const agencyName = screen.getByRole('heading', { name: /Agency Name/i });
    expect(agencyName).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    render(<Footer />);
    const phoneNumber = screen.getByText('(877) 968-3778');
    const emailLink = screen.getByRole('link', { name: /info@agency.gov/i });

    expect(phoneNumber).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });
});
