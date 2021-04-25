import { useQuery } from '@apollo/client';
import { Product } from './Product';
import { products } from '../queries/productQuery';
import PropTypes from 'prop-types';
import { Box } from '@components/Box';

export const ProductList = ({ channel, first }) => {
	const {
		data: {
			products: { edges },
		},
		error,
	} = useQuery(products, {
		variables: {
			first,
			channel,
		},
	});

	if (error) return <>Error</>;

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
			gridTemplateRows='repeat(auto-fill, minmax(180px,1fr))'
			gridAutoFlow='dense'
			gridGap={8}
		>
			{edges.map((product) => (
				<Product key={product.node.id} product={product.node} />
			))}
		</Box>
	);
};

ProductList.propTypes = {
	channel: PropTypes.string.isRequired,
	first: PropTypes.number.isRequired,
};
