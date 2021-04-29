import { HOME_PAGE } from '@queries';
import { initializeApollo } from '@lib/apolloClient';
import { CHANNEL } from '@lib/consts';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Box, Text, ProductFilter, ProductList } from '@components';
import { useState } from 'react';

// getting some info from a random category to populate hero
const catId = 'Q2F0ZWdvcnk6Nw==';

export default function Home() {
	const [filter, setFilter] = useState();
	const [viewAmount, setViewAmount] = useState(20);

	const { data, error, loading } = useQuery(HOME_PAGE, {
		variables: {
			first: 20,
			channel: CHANNEL,
			catId,
		},
	});

	const handleCatChange = (e) => {
		if (e.target.value === `__all__`) {
			return setFilter();
		}
		setFilter({ categories: e.target.value });
	};

	const handleViewAmountChange = (e) => {
		setViewAmount(e.target.value);
	};

	if (loading) return null;

	// should be 404 page
	if (error) return <>Error</>;
	const { category, shop } = data;

	return (
		<>
			<Head>
				<title>Shop</title>
				<meta property='og:title' content='My page title' key='title' />
				<meta name='description' content={shop.description} />
			</Head>

			{/* This would be a hero component in larger app */}
			{category.backgroundImage.url && (
				<Box
					backgroundImage={`url('${category.backgroundImage.url}')`}
					backgroundSize='cover'
					minHeight='320px'
					display='flex'
					alignItems='center'
					justifyContent='center'
					p='8'
					role='banner'
				>
					{shop.name && (
						<Text text='hero' as='h1' color='white' textShadow='1px 1px #000'>
							{shop.headerText}
						</Text>
					)}
				</Box>
			)}

			<main>
				<ProductFilter
					viewAmount={viewAmount}
					fitler={filter}
					onCatChange={handleCatChange}
					onViewAmountChange={handleViewAmountChange}
				/>

				<div>
					<ProductList
						first={viewAmount}
						channel={CHANNEL}
						filterArgs={filter}
					/>
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	// Run queries for page, and store in clients cache
	// Could skip cache and return data as prop

	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: HOME_PAGE,
		variables: {
			first: 20,
			channel: CHANNEL,
			catId,
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
