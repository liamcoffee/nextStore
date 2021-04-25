// TODO set up fragment for basic product info
import gql from "graphql-tag";

import { REQURIED_PRODUCT_FIELDS } from "./fragments";

export const products = gql`
	${REQURIED_PRODUCT_FIELDS}

	query products($first: Int!, $channel: String!) {
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
	}
`;

//Querying by slug to make URL pretty, would be better as ID if slug isn't indexed
export const singleProduct = gql`
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
