import { Product } from './Product';
import PropTypes from 'prop-types';
import { Box } from '@components';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '@queries';
export const ProductList = ({ channel, first, filterArgs }) => {
	/* In a larger projec this would be moved to a custom hook
	incase you wanted another similar component such as productGrid
	*/
	const { data, error, loading } = useQuery(PRODUCTS, {
		variables: {
			first,
			channel,
			...(filterArgs && { filter: filterArgs }),
		},
	});

	if (loading) return null;
	// should be 404
	if (error) return <>Error</>;

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(auto-fill, minmax(285px, 1fr))'
			gridTemplateRows='repeat(auto-fill, minmax(180px,1fr))'
			gridAutoFlow='dense'
			gridGap={8}
			role='list'
		>
			{data.products.edges.map((product) => (
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
