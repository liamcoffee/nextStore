import { useQuery } from '@apollo/client';
import { Product } from './Product';
import PropTypes from 'prop-types';
import { Box } from '@components';
import { useProductList } from '../hooks/useProductList';

export const ProductGrid = ({ channel, first }) => {
	const { products, error } = useProductList({ first, channel });

	if (error) return <>Error</>;

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
			gridTemplateRows='repeat(auto-fill, minmax(180px,1fr))'
			gridAutoFlow='dense'
			gridGap={8}
		>
			{products.map((product) => (
				<Product key={product.node.id} product={product.node} />
			))}
		</Box>
	);
};

ProductGrid.propTypes = {
	channel: PropTypes.string.isRequired,
	first: PropTypes.number.isRequired,
};
