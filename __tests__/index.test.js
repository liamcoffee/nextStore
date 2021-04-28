import { render, screen, waitFor, fireEvent } from '../test-utils';
import Home from '@pages/index';
import { apolloMockProducts } from '../__fixtures__/products';

/*
I've set up a test wrapper which takes apollo mock responses as options
The fixture for this is quite large but its quite a good system to make sure 
no queries are broken 
*/

describe('Home', () => {
	test('renders without crashing', async () => {
		render(<Home />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => {
			expect(screen.getByText('Argan')).toBeInTheDocument();
		});
	});

	test('Matches snapshot', async () => {
		const { container } = render(<Home />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => {
			expect(container).toMatchSnapshot();
		});
	});

	// something strange going on here
	test.skip('the product filter works', async () => {
		render(<Home />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => {
			const selectElement = screen.getByTestId('viewBody');

			fireEvent.change(selectElement, {
				target: { value: 'OPTION1' },
			});
		});

		await waitFor(() => {
			expect(screen.getByText('CATEGORYWORKS')).toBeInTheDocument();
		});
		/* expecting new list of items from the fixture (put in a dummy name), 
		you could also count the products to test the view amount control
		*/
	});
});
