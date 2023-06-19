import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Main from '../Main';

describe('Error component', () => {

    test('Fail Response', async () => {
        render(<Main/>);
        // Assert that the error is displayed correctly
        const errorTest = await screen.findByText('Error test');
        await waitFor(() => expect(errorTest).toBeTruthy());
    });
});