import { HOME_PAGE } from '@queries/home';
import { initializeApollo } from '@lib/apolloClient';
import { CHANNEL } from '@lib/consts';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Box, Text, ProductFilter, ProductList } from '@components';
import { useState } from 'react';
export default function Home() {
	const [filter, setFilter] = useState();
	const [viewAmount, setViewAmount] = useState(20);

	const { data, error, loading } = useQuery(HOME_PAGE, {
		variables: {
			first: 5,
			channel: CHANNEL,
			catId: 'Q2F0ZWdvcnk6Nw==',
			filter: { categories: 'Q2F0ZWdvcnk6Mg==' },
		},
	});

	console.log(`loggin`, data);
	console.log(error, loading);

	const handleCatChange = (e) => {
		if (e.target.value === `__all__`) {
			return setFilter();
		}
		setFilter({ categories: e.target.value });
	};

	const handleViewAmountChange = (e) => {
		setViewAmount(e.target.value);
	};

	console.log(`loggin`, data);

	console.log(`error`, error);

	if (loading) return null;
	if (error) return <>Error</>;
	const { category, shop } = data;

	console.log(data);
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
				>
					{shop.name && (
						<Text text='h1' as='h1' color='white' textShadow='1px 1px #000'>
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

export async function getServerSideProps(context) {
	// Run queries for page, and store in clients cache
	// Could skip cache and return data as prop

	console.log(`LOGGIN`, context.props);
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: HOME_PAGE,
		variables: {
			first: 20,
			channel: CHANNEL,

			// getting some info from a category to populate hero
			catId: 'Q2F0ZWdvcnk6Nw==',
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
