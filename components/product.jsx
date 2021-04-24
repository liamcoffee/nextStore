import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

export default function Product({ product }) {
	if (!product) return null;

	return (
		<div key={product.id}>
			<Link
				href={`/products/${product.category.slug}/${product.slug}`}
				key={product.id}
			>
				{product.name}
			</Link>
		</div>
	);
}
