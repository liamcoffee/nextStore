import { render, screen } from '../test-utils';
import Home from '@pages/index';
import { apolloMockProducts } from '../__fixtures__/products';

describe('Home', () => {
	it('renders without crashing', () => {
		render(<Home />, {
			apollo: apolloMockProducts,
		});
		expect(screen.getByRole('heading', { name: 'SHOP!!' })).toBeInTheDocument();
	});
});
