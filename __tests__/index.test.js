import { render, screen, waitFor, act } from '../test-utils';
import Home from '@pages/index';
import { apolloMockProducts } from '../__fixtures__/products';

describe('Home', () => {
	it('renders without crashing', async () => {
		await act(async () => {
			render(<Home />, {
				apollo: apolloMockProducts,
			});

			await waitFor(() => new Promise((res) => setTimeout(res, 1)));

			await waitFor(() => {
				expect(screen.getByText('SUDDDS')).toBeInTheDocument();
				expect(screen.getByText('Argan')).toBeInTheDocument();
			});
		});
	});

	it('renders without crashing', async () => {
		await act(async () => {
			render(<Home />, {
				apollo: apolloMockProducts,
			});

			await waitFor(() => new Promise((res) => setTimeout(res, 1)));

			await waitFor(() => {
				expect(screen.getByText('SUDDDS')).toBeInTheDocument();
				expect(screen.getByText('Argan')).toBeInTheDocument();
			});
		});
	});
});
