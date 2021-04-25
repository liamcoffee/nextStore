// TODO set up fragment for basic product info
import gql from 'graphql-tag';
import { REQURIED_PRODUCT_FIELDS } from './fragments';

export const HOME_PAGE = gql`
	${REQURIED_PRODUCT_FIELDS}

	query homePage($first: Int!, $channel: String!) {
		shop {
			name
		}

		products(first: $first, channel: $channel) {
			edges {
				node {
					...CoreProductFields
					thumbnail(size: 5) {
						url
						alt
					}
				}
			}
		}
	}
`;
