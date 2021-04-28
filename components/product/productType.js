import { shape, number, string, bool, arrayOf } from 'prop-types';

export const productType = shape({
	product: shape({
		id: string.isRequired,
		category: shape({
			slug: string.isRequired,
		}),
		name: string.isRequired,
		slug: string.isRequired,
		thumbnail: shape({
			url: string.isRequired,
			alt: string.isRequired,
		}),
		collections: arrayOf(
			shape({
				name: string.isRequired,
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
	}),
});
