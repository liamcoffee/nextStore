import { shape, number, string, bool, arrayOf } from 'prop-types';

export const productType = shape({
	id: string,
	category: shape({
		slug: string,
	}),
	name: string,
	slug: string,
	thumbnail: shape({
		url: string,
		alt: string,
	}),
	collections: arrayOf(
		shape({
			name: string,
		})
	),
	pricing: shape({
		discount: shape({
			gross: shape({
				amount: number,
			}),
		}),
		onSale: bool,
		priceRange: shape({
			start: shape({
				gross: shape({
					amount: number,
					currency: string,
				}),
			}),
		}),
	}),
});
