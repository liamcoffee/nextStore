import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Text';

const ProductGridImg = styled.img`
	width: 100%;
	transition: transform 0.2s ease-in-out;
`;

const ProductWrap = styled(Box)`
	cursor: pointer;
	text-align: center;
	position: relative;
	display: grid;
	align-items: end;
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

					{product.collections.map((collectionName, i) => {
						return (
							<Text as='span' color='white' key={collectionName.name + i}>
								{/* This is a little bit hacky but a sample product 
								was returning a massive blob of lorem in position 3 */}
								{collectionName.name.substring(0, 20)}
								{i < product.collections.length - 1 && ' / '}
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
