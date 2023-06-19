import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from '../Main';
import * as taxCalculator from '../../helpers/taxCalculator';


describe('Main component', () => {
  test('renders without errors', async () => {
    render(<Main/>);
    const titleScreen = await screen.findByText('Test Calculator');
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
  test('calculates taxes correctly', async () => {
    render(<Main />);
    
    // Mock user input
    const incomeInput = screen.getByLabelText('Annual Salary:');
    fireEvent.change(incomeInput, { target: { value: '100000' } });

    const yearSelect = screen.getByLabelText('Tax Year:');
    fireEvent.change(yearSelect, { target: { value: '2022' } });

    // Mock API response

    jest.spyOn(taxCalculator, 'fetchTaxAsync').mockResolvedValue(
        [
                {
                    "min": 0,
                    "max": 50197,
                    "rate": 0.15
                },
                {
                    "min": 50197,
                    "max": 100392,
                    "rate": 0.205
                },
                {
                    "min": 100392,
                    "max": 155625,
                    "rate": 0.26
                },
                {
                    "min": 155625,
                    "max": 221708,
                    "rate": 0.29
                },
                {
                    "min": 221708,
                    "rate": 0.33
                }
            ]
    );
    // Trigger the calculation
    await fireEvent.click(screen.getByText('Calculate'));

    // Assert that the loading spinner is displayed
    const loadingSpinner = await waitFor(() => screen.findByTestId('loading-spinner'));
    await waitFor(() => expect(loadingSpinner).toBeTruthy());
    

    // Wait for the calculation to complete
    const titleResult = await screen.findByTestId('titleResult');
    await waitFor(() => expect(titleResult).toBeTruthy());

    // Assert that the result is displayed correctly
    const textSalary = await screen.findByText('Salary');
    await waitFor(() => expect(textSalary).toBeTruthy());
    
    const firstValue = await screen.findByText('$0');
    await waitFor(() => expect(firstValue).toBeInTheDocument());

  });
});
