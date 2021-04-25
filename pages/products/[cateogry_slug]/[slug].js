import PropTypes from 'prop-types';
import styled from 'styled-components';

import { singleProduct } from 'queries/productQuery';

import { initializeApollo } from 'lib/apolloClient';
import { useQuery } from '@apollo/client';

import { Button } from '@components/Button';

import { Header } from '@components/Header';
import { Box } from '@components/Box';
import { Text } from '@components/Text';

import { CHANNEL } from 'lib/consts';
import { mapCurrencySymbol } from 'helpers';

const generateDescriptionBlock = (description) => {
	return JSON.parse(description).blocks.map((block, i) => (
		<p key={i} dangerouslySetInnerHTML={{ __html: block.data.text }} />
	));
};

const LargeProductImage = styled.img`
	max-width: 100%;
	height: auto;
	margin: 0 auto;
	display: block;
`;

const QtyBox = styled.input`
	width: 3rem;
	padding: 1.25rem 2.5rem;
`;

ProductPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

// Used styled systems breakpoints with flex on this page just for variety

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
			<Box
				display={['block', 'block', 'flex']}
				justifyContent='center'
				alignItems='center'
			>
				<Box width={[1, 1, 1 / 2]}>
					<LargeProductImage
						src={product.thumbnail.url}
						alt={product.thumbnail.alt}
					/>
				</Box>
				<Box width={[1, 1, 1 / 2]}>
					<Text as='h1' text='h1'>
						{product.name}
					</Text>

					{/* TODO IF DISCOUNT, STAR RATING, TQY */}
					{mapCurrencySymbol[product.pricing.priceRange.start.gross.currency]}

					{product.pricing.onSale
						? `sale ${product.pricing.discount.gross.amount}`
						: product.pricing.priceRange.start.gross.amount}

					<br />
					{product.isAvailable ? 'In stock' : 'out of stock'}

					<br />

					<hr />

					{generateDescriptionBlock(product.description)}

					<QtyBox type='number' />
					<Button>Buy Now</Button>
				</Box>
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
