import React from 'react';
import { screen, waitFor } from '@testing-library/react';

describe('Error component', () => {

    test('Fail Response', async () => {
        // Assert that the error is displayed correctly
        const errorTest = await screen.findByText('Error test');
        await waitFor(() => expect(errorTest).toBeTruthy());
    });
});