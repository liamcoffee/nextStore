// TODO set up fragment for basic product info
import gql from 'graphql-tag';
export const products = gql`
	query products($first: Int!, $channel: String!) {
		products(first: $first, channel: $channel) {
			edges {
				node {
					id
					name
					slug
					category {
						slug
					}
					thumbnail(size: 5) {
						url
						alt
					}

					pricing {
						priceRange {
							start {
								net {
									amount
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const singleProduct = gql`
	query singleProduct($slug: String!, $channel: String!) {
		product(slug: $slug, channel: $channel) {
			id
			name
			slug
			category {
				slug
			}
			description
			seoTitle
			seoDescription

			thumbnail(size: 5) {
				url
				alt
			}
		}
	}
`;
