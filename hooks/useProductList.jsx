import { useQuery } from '@apollo/client';
import { products } from '../queries/productQuery';


export const useProductList = ({first, channel}) => {    
    const {
		data: {
			products: { edges },
		},
		error,
	} = useQuery(products, {
		variables: {
			first,
			channel
		},
	});

    return {
        products: edges,
        error,
    }
}