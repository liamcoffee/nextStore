import { useQuery } from '@apollo/client';
import { products } from '../queries/productQuery';

export const useProductList = ({ first, channel, filterArgs }) => {
	const {
		data: {
			products: { edges },
		},
		error,
	} = useQuery(products, {
		variables: {
			first,
			channel,
			...(filterArgs && { filter: filterArgs }),
		},
	});

	return {
		products: edges,
		error,
	};
};
