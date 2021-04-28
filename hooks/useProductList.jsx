import { useQuery } from '@apollo/client';
import { products } from '../queries/productQuery';

/* this works but i had an issue with the tests not liking it
thought id leave it in just as a sample, its a pattern i use a lot.
*/
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
