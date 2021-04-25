import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@components/Box';
import { Text } from '@components/Text';
const ProductGridImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;

	transition: transform 0.2s ease-in-out;
`;

const ProductWrap = styled(Box)`
	cursor: pointer;
	text-align: center;
	position: relative;

	&:hover ${ProductGridImg} {
		transform: scale(1.1);
	}
`;

export const Product = ({ product }) => {
	if (!product) return null;
	return (
		<Link href={`/products/${product.category.slug}/${product.slug}`}>
			<ProductWrap>
				<ProductGridImg
					src={product.thumbnail.url}
					alt={product.thumbnail.alt}
				/>

				<Box backgroundColor='black' p={3}>
					<Text text='h3' as='h3' color='white'>
						{product.name}
					</Text>

					{/* This is a little bit hacky but a sample product 
					was returning a massive blob of lorem in position 3 */}

					{product.collections.slice(0, 2).map((collectionName, i) => {
						if (i > 3) return;
						return (
							<Text as='span' color='white' key={collectionName.name + i}>
								{collectionName.name} /{' '}
							</Text>
						);
					})}
				</Box>
			</ProductWrap>
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
		}).isRequired,
		collections: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
	}),
};
