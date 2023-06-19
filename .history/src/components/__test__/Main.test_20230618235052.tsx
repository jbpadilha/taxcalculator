import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import Main from '../Main';

describe('Main component', () => {
  test('renders without errors', () => {
    render(<Main/>);
    const titleScreen = screen.getByText('Test Calculator');
    expect(titleScreen).toBeInTheDocument();
    // render(<Main />);
    /*await act(async () => {
        const targetElement = await waitFor(() => screen.findByRole('div', { name: 'title' }));
        // Get the text content of the div
        const textContent = targetElement.textContent;
        // Assert that the component renders without throwing any errors
        expect(textContent).toBe('Test Calculator'); 
    });*/
  });
/*
  test('calculates taxes correctly', async () => {
    render(<Main />);
    
    // Mock user input
    const incomeInput = screen.getByLabelText('Annual Salary:');
    fireEvent.change(incomeInput, { target: { value: '100000' } });

    const yearSelect = screen.getByLabelText('Tax Year:');
    fireEvent.change(yearSelect, { target: { value: '2022' } });

    // Mock API response
    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { salary: 0, rate: 0.1, total: 0 },
            { salary: 10000, rate: 0.2, total: 2000 },
            { salary: 20000, rate: 0.3, total: 6000 },
          ]),
      })
    );

    // Trigger the calculation
    fireEvent.click(screen.getByText('Calculate'));

    // Assert that the loading spinner is displayed
    const loadingSpinner = await waitFor(() => screen.findByTestId('loading-spinner'));
    expect(loadingSpinner).toBeInTheDocument();

    // Wait for the calculation to complete
    await screen.findByText('Marginal Tax Rate for yearly income of $100,000.00 for the year of 2022:');

    // Assert that the result is displayed correctly
    expect(screen.getByText('Salary')).toBeInTheDocument();
    expect(screen.getByText('$0')).toBeInTheDocument();
    expect(screen.getByText('0.1%')).toBeInTheDocument();
    expect(screen.getByText('$0')).toBeInTheDocument();

    expect(screen.getByText('$10,000')).toBeInTheDocument();
    expect(screen.getByText('0.2%')).toBeInTheDocument();
    expect(screen.getByText('$2,000')).toBeInTheDocument();

    expect(screen.getByText('$20,000')).toBeInTheDocument();
    expect(screen.getByText('0.3%')).toBeInTheDocument();
    expect(screen.getByText('$6,000')).toBeInTheDocument();

    // Assert that the total is displayed correctly
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$8,000')).toBeInTheDocument();
  });*/
});
