import Link from 'next/link';
import { Box } from '../Box';
import PropTypes from 'prop-types';

import { ProductPrice } from './ProductPrice';
import { productType } from './productType';

import {
	ProductText,
	ProductWrap,
	ProductGridImg,
	ProductHr,
} from './Product.styled';

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

				<Box p={3}>
					<ProductHr />
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
					<ProductPrice mt={2} text='h2' product={product} />
					<ProductHr />
				</Box>
			</ProductWrap>
		</Link>
	);
};
Product.propTypes = {
	product: productType,
};
