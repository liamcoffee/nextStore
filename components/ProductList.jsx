import { useQuery } from '@apollo/client';
import Product from './product';
import { products } from '../queries/productQuery';

export default function ProductList() {
	const {
		data: {
			products: { edges },
		},
		error,
	} = useQuery(products, {
		variables: {
			first: 5,
			channel: 'uk',
		},
	});

	if (error) return <>Error</>;

	return (
		<>
			{edges.map((product) => (
				<Product product={product.node} />
			))}
		</>
	);
}
