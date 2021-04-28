import { Product } from './Product';
import PropTypes from 'prop-types';
import { Box } from '@components';
import { useQuery } from '@apollo/client';
import { products } from '@queries';
export const ProductList = ({ channel, first, filterArgs }) => {
	const { data, error, loading } = useQuery(products, {
		variables: {
			first,
			channel,
			...(filterArgs && { filter: filterArgs }),
		},
	});
	console.log(`logging data here`, data);
	console.log(`error`, error);
	if (loading) return null;
	if (error) return <>Error</>;

	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
			gridTemplateRows='repeat(auto-fill, minmax(180px,1fr))'
			gridAutoFlow='dense'
			gridGap={8}
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
