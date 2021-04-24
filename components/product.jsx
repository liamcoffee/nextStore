import Link from 'next/link';
import PropTypes from 'prop-types';

export const Product = ({ product }) => {
	if (!product) return null;

	return (
		<Link href={`/products/${product.category.slug}/${product.slug}`}>
			<div>
				<img src={product.thumbnail.url} alt={product.thumbnail.alt} />
				{product.name}
			</div>
		</Link>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		category: PropTypes.shape({
			slug: PropTypes.string.isRequired,
		}),
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		thumbnail: PropTypes.shape({
			url: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}),
	}),
};
