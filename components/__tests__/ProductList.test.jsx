// import { render, waitFor, screen } from '@testing-library/react';
import { render, waitFor, screen } from '../../test-utils';
// import { MockedProvider } from '@apollo/client/testing';
import { apolloMockProducts } from '../../__fixtures__/products';
import { ProductList } from '../product/ProductList';

describe('Home', () => {
	it('renders without crashing', async () => {
		render(<ProductList first={20} channel='uk' />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => new Promise((res) => setTimeout(res, 1)));
		const test = screen.getByText('Argan');
		expect(test).toBeDefined();
	});
});
