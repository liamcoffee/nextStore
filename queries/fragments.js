import { gql } from '@apollo/client';

export const REQURIED_PRODUCT_FIELDS = gql`
	fragment CoreProductFields on Product {
		id
		name
		slug
		category {
			slug
		}

		pricing {
			onSale
			discount {
				gross {
					amount
				}
			}
			priceRange {
				start {
					gross {
						amount
						currency
					}
				}
			}
		}
		collections {
			name
		}
	}
`;
