import { useState } from 'react';
import PropTypes from 'prop-types';

import { initializeApollo } from 'lib/apolloClient';
import { useQuery } from '@apollo/client';

import { Button, Box, Text } from '@components';

import { CHANNEL } from 'lib/consts';
import { ProductList } from '@components';
import { PRODUCTS, SINGLE_PRODUCT } from '@queries';
import Head from 'next/head';
import { ProductPrice } from 'components/product/ProductPrice';

import {
	LargeProductImage,
	QtyBox,
	ShowMore,
	ProductDescription,
	Stock,
} from '@styles/product/ProductPage.styled';

const generateDescriptionBlock = (description) => {
	return JSON.parse(description).blocks.map((block, i) => (
		<p key={i} dangerouslySetInnerHTML={{ __html: block.data.text }} />
	));
};

/*  
Used styled systems breakpoints with flex on this page just for variety
Imported some styled components as i find having too many props distracting
 */

// Page consts
const relatedProductCount = 4;

export default function ProductPage({ slug }) {
	/* state to control size of description box,
	it appears to be huge on a lot of products, 
	interested to see how you control / use this
	the showmore is a little flawed in that it doesnt take into account the height of the content
	*/
	const [showingMore, setShowingMore] = useState(false);

	const {
		data: { product },
		error,
	} = useQuery(SINGLE_PRODUCT, {
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	// should be 404 redirect
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
			<Box
				display={['block', 'block', 'flex']}
				justifyContent='space-around'
				my={8}
			>
				<Box width={[1, 1, '40%']} position='relative'>
					<LargeProductImage
						src={product.thumbnail.url}
						alt={product.thumbnail.alt}
					/>

					<Stock>
						<Text as='span' text='h3' color='white'>
							{product.isAvailable ? 'In stock' : 'out of stock'}
						</Text>
					</Stock>
				</Box>

				<Box width={[1, 1, '40%']}>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<Text as='h1' text='h1'>
							{product.name}
						</Text>

						{/* TODO IF DISCOUNT, STAR RATING, TQY */}
						<ProductPrice text='h1' product={product} />
					</Box>

					<hr />
					<ProductDescription showingMore={showingMore}>
						{generateDescriptionBlock(product.description)}

						<ShowMore onClick={() => setShowingMore(!showingMore)}>
							{showingMore ? 'Show Less' : 'Show More'}
						</ShowMore>
					</ProductDescription>

					<Box mt={8}>
						<QtyBox type='number' defaultValue='1' />
						<Button
							onClick={() => {
								alert('Hire me to see a mutation');
							}}
						>
							Buy Now
						</Button>
					</Box>
				</Box>
			</Box>

			<Box textAlign='center' borderTop='1px solid' borderBottom='1px solid'>
				<h2>Related Products</h2>
			</Box>

			<ProductList
				role='feed'
				first={relatedProductCount}
				channel={CHANNEL}
				filterArgs={{ categories: product.category.id }}
			/>
		</>
	);
}

ProductPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

export async function getServerSideProps({ query }) {
	const { slug } = query;
	const apolloClient = initializeApollo();

	const getProduct = await apolloClient.query({
		query: SINGLE_PRODUCT,
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	await apolloClient.query({
		query: PRODUCTS,
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
