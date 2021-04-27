import gql from 'graphql-tag';
import { REQURIED_PRODUCT_FIELDS } from './fragments';

export const HOME_PAGE = gql`
	${REQURIED_PRODUCT_FIELDS}

	query homePage(
		$first: Int!
		$channel: String!
		$catId: ID!
		$filter: ProductFilterInput
	) {
		shop {
			name
			description
			headerText
		}

		products(first: $first, channel: $channel, filter: $filter) {
			edges {
				node {
					...CoreProductFields
					thumbnail(size: 500) {
						url
						alt
					}
				}
			}
		}

		category(id: $catId) {
			backgroundImage {
				url
			}
		}
	}
`;
