import PropTypes from 'prop-types';

import { singleProduct } from 'queries/productQuery';

import { initializeApollo } from 'lib/apolloClient';
import { useQuery } from '@apollo/client';

import { Button } from '@components/Button';

import { Header } from '@components/Header';
import { Box } from '@components/Box';

import { CHANNEL } from 'lib/consts';
import { mapCurrencySymbol } from 'helpers';

const generateDescriptionBlock = (description) => {
	return JSON.parse(description).blocks.map((block, i) => (
		<p key={i} dangerouslySetInnerHTML={{ __html: block.data.text }} />
	));
};

ProductPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

export default function ProductPage({ slug }) {
	const {
		data: { product },
		error,
	} = useQuery(singleProduct, {
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	console.log(`got prodcut`, product);
	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<>
			<Header title={product.seoTitle} description={product.seoDescription} />
			<Box>
				<img src={product.thumbnail.url} alt={product.thumbnail.alt} />
			</Box>
			<Box>
				{product.name}
				{generateDescriptionBlock(product.description)}

				{mapCurrencySymbol[product.pricing.priceRange.start.gross.currency]}
				{product.pricing.priceRange.start.gross.amount}
				<Button>Buy Now</Button>
			</Box>
		</>
	);
}

export async function getServerSideProps({ query }) {
	const { slug } = query;
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: singleProduct,
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			slug,
		},
	};
}
