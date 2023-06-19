import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Main from '../Main';
import * as taxCalculator from '../../helpers/taxCalculator';

describe('Error component', () => {

    test('Fail Response', async () => {
        render(<Main/>);
    
        // Mock user input
        const incomeInput = screen.getByLabelText('Annual Salary:');
        fireEvent.change(incomeInput, { target: { value: '100000' } });
    
        const yearSelect = screen.getByLabelText('Tax Year:');
        fireEvent.change(yearSelect, { target: { value: '2022' } });
    
        // Mock API response
    
        jest.spyOn(taxCalculator, 'fetchTaxAsync').mockRejectedValue('Error test');
    
        // Trigger the calculation
        await fireEvent.click(screen.getByText('Calculate'));
    
        // Assert that the loading spinner is displayed
        const loadingSpinner = await waitFor(() => screen.findByTestId('loading-spinner'));
        await waitFor(() => expect(loadingSpinner).toBeTruthy());
    
    
        // Assert that the error is displayed correctly
        const errorTest = await screen.findByText('Error test');
        await waitFor(() => expect(errorTest).toBeTruthy());
    
      });
});