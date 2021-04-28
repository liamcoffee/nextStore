import { Box } from '../Box';
import { Text } from '../Text';
import { mapCurrencySymbol } from '~/helpers';
import { productType } from './productType';

export const ProductPrice = ({ product, ...textProps }) => {
	if (!product) return null;
	const currencySymbol =
		mapCurrencySymbol[product.pricing.priceRange.start.gross.currency];

	return (
		<Box>
			<Text
				textDecoration={product.pricing.onSale ? 'line-through' : 'none'}
				{...textProps}
			>
				{currencySymbol}
				{product.pricing.priceRange.start.gross.amount.toFixed(2)}
			</Text>
			{product.pricing.onSale && (
				<Text {...textProps}>
					{currencySymbol}
					{product.pricing.onSale.discount.gross.amount.toFixed(2)}
				</Text>
			)}
		</Box>
	);
};

ProductPrice.propTypes = {
	product: productType,
};
