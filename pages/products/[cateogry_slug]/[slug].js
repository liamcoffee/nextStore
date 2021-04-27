import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { singleProduct } from 'queries/productQuery';

import { initializeApollo } from 'lib/apolloClient';
import { useQuery } from '@apollo/client';

import { Button, Box, Text } from '@components';

import { CHANNEL } from 'lib/consts';
import { mapCurrencySymbol } from 'helpers';
import { ProductList } from '@components';
import { products } from '@queries/productQuery';
import Head from 'next/head';

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

const FadeBottom = styled.div`
	width: 100%;
	height: 30px;
	z-index: 99;
	position: absolute;
	bottom: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid;
	border-bottom: 1px solid;
	background-color: white;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		background-color: black;
		color: white;
	}
`;

const ProductDescription = styled.div`
	transition: max-height 0.15s ease-out;
	max-height: ${(props) => (props.showingMore ? '1000px' : '300px')};
	overflow: hidden;
	position: relative;
	padding-bottom: ${(props) => props.theme.space[8]};
`;

ProductPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

// Used styled systems breakpoints with flex on this page just for variety

// Page consts
const relatedProductCount = 4;

export default function ProductPage({ slug }) {
	const [showingMore, setShowingMore] = useState(false);
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
			<Head>
				<title>{product.seoTitle}</title>
				<meta property='og:title' content={product.seoTitle} key='title' />
				<meta name='description' content={product.seoDescription} />
			</Head>
			<Box display={['block', 'block', 'flex']} justifyContent='center' my={8}>
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

					<hr />
					<ProductDescription showingMore={showingMore}>
						{generateDescriptionBlock(product.description)}
						<FadeBottom onClick={() => setShowingMore(!showingMore)}>
							{showingMore ? 'Show Less' : 'Show More'}
						</FadeBottom>
					</ProductDescription>

					<Box mt={8}>
						<QtyBox type='number' defaultValue='1' />
						<Button>Buy Now</Button>
					</Box>
				</Box>
			</Box>

			<Box textAlign='center' borderTop='1px solid' borderBottom='1px solid'>
				<h2>Related Products</h2>
			</Box>

			<ProductList
				first={relatedProductCount}
				channel={CHANNEL}
				filterArgs={{ categories: product.category.id }}
			/>
		</>
	);
}

export async function getServerSideProps({ query }) {
	const { slug } = query;
	const apolloClient = initializeApollo();

	const getProduct = await apolloClient.query({
		query: singleProduct,
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	console.log(`got the product`, getProduct);
	await apolloClient.query({
		query: products,
		variables: {
			first: relatedProductCount,
			channel: CHANNEL,
			filter: { categories: getProduct.data.product.category.id },
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			slug,
		},
	};
}
