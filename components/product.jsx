import Link from 'next/link';
import PropTypes from 'prop-types';

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		category: PropTypes.shape({
			slug: PropTypes.string.isRequired,
		}),
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
	}),
};

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
