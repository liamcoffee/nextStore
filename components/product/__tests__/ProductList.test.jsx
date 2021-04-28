// import { render, waitFor, screen } from '@testing-library/react';
import { render, waitFor, screen } from '../../../test-utils';
// import { MockedProvider } from '@apollo/client/testing';
import { apolloMockProducts } from '../../../__fixtures__/products';
import { ProductList } from '../ProductList';

describe('Home', () => {
	it('renders without crashing', async () => {
		render(<ProductList first={20} channel='uk' />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => {
			expect(screen.getByText('Argan')).toBeDefined();
		});
	});

	test('Matches snapshot', async () => {
		const { container } = render(<ProductList first={20} channel='uk' />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => {
			expect(container).toMatchSnapshot();
		});
	});
});
