import { Product } from './Product';
import PropTypes from 'prop-types';
import { Box } from '@components';
import { useProductList } from '../hooks/useProductList';

export const ProductList = ({ channel, first, filterArgs }) => {
	const { products, error } = useProductList({ first, channel, filterArgs });

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

ProductList.propTypes = {
	channel: PropTypes.string.isRequired,
	first: PropTypes.number.isRequired,
	// Not really correct but fine for demo purposes
	filterArgs: PropTypes.object,
};
