import { useQuery } from '@apollo/client';
import { Product } from './Product';
import { products } from '../queries/productQuery';
import PropTypes from 'prop-types';

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
		<>
			{edges.map((product) => (
				<Product key={product.node.id} product={product.node} />
			))}
		</>
	);
};

ProductList.propTypes = {
	channel: PropTypes.string.isRequired,
	first: PropTypes.number.isRequired,
};
