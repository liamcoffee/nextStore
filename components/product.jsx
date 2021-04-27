import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Text';

const ProductGridImg = styled.img`
	width: 100%;
`;

const ProductText = styled(Text)`
	color: ${(props) => props.theme.colors.black};
	transition: all 0.2s ease-in-out;
`;

const ProductWrap = styled(Box)`
	cursor: pointer;
	text-align: center;
	position: relative;
	display: grid;
	align-items: end;

	&:hover ${Text} {
		color: ${(props) => props.theme.colors.peach};
	}
`;

export const Product = ({ product }) => {
	if (!product) return null;

	return (
		<Link href={`/products/${product.category.slug}/${product.slug}`}>
			<ProductWrap>
				{product?.thumbnail?.url && (
					<ProductGridImg
						src={product.thumbnail.url}
						alt={product.thumbnail.alt}
					/>
				)}

				<Box p={3} borderTop='1px solid'>
					<ProductText text='h2' as='span' fontWeight='bold' display='block'>
						{product.name}
					</ProductText>

					{product.collections.map((collectionName, i) => {
						return (
							<ProductText as='span' key={collectionName.name + i}>
								{/* This is a little bit hacky but a sample product 
								was returning a massive blob of lorem in position 3 */}
								{collectionName.name.substring(0, 20)}
								{i < product.collections.length - 1 && ' / '}
							</ProductText>
						);
					})}
					<hr width='80%' />
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
