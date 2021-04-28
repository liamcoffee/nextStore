import gql from 'graphql-tag';
import { REQURIED_PRODUCT_FIELDS } from './fragments';

export const HOME_PAGE = gql`
	${REQURIED_PRODUCT_FIELDS}

	query homePage($first: Int!, $channel: String!, $catId: ID!) {
		shop {
			name
			description
			headerText
		}

		products(first: $first, channel: $channel) {
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

export const PRODUCTS = gql`
	${REQURIED_PRODUCT_FIELDS}

	query products($first: Int!, $channel: String!, $filter: ProductFilterInput) {
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
	}
`;

//Querying by slug to make URL pretty, would be better as ID if slug isn't indexed
export const SINGLE_PRODUCT = gql`
	${REQURIED_PRODUCT_FIELDS}

	query singleProduct($slug: String!, $channel: String!) {
		product(slug: $slug, channel: $channel) {
			...CoreProductFields

			description
			seoTitle
			seoDescription
			isAvailable
			thumbnail(size: 500) {
				url
				alt
			}
		}
	}
`;
