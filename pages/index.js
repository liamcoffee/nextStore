import { products, homePage } from "@queries/productQuery";
import { HOME_PAGE } from "@queries/home";
import { ProductList, Header } from "@components";
import { initializeApollo } from "@lib/apolloClient";
import { CHANNEL } from "@lib/consts";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Box, Text } from "@components";
export default function Home() {
	const { data, error, loading } = useQuery(HOME_PAGE, {
		variables: {
			first: 20,
			channel: CHANNEL,
			catId: "Q2F0ZWdvcnk6Nw==",
		},
	});

	console.log(`loggin`, data);

	if (loading) return null;
	if (error) return <>Error</>;
	const { category, shop } = data;
	return (
		<>
			<Head>
				<title>Shop</title>
				<meta property="og:title" content="My page title" key="title" />
				<meta name="description" content={"TODO"} />
			</Head>

			{/* This would be a hero component in larger app */}
			{category.backgroundImage.url && (
				<Box
					backgroundImage={`url('${category.backgroundImage.url}')`}
					backgroundSize="cover"
					minHeight="320px"
					display="flex"
					alignItems="center"
					justifyContent="center"
					p="8"
				>
					{shop.name && (
						<Text text="h1" as="h1" color="white" textShadow="1px 1px #000">
							{shop.name}
						</Text>
					)}
				</Box>
			)}

			<main>
				<div>
					<ProductList first={20} channel={CHANNEL} />
				</div>
			</main>
			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" />
				</a>
			</footer>
		</>
	);
}

export async function getServerSideProps() {
	// Run queries for page, and store in clients cache
	// Could skip cache and return data as prop

	const apolloClient = initializeApollo();

	const test = await apolloClient.query({
		query: HOME_PAGE,
		variables: {
			first: 20,
			channel: CHANNEL,
			catId: "Q2F0ZWdvcnk6Nw==",
		},
	});

	console.log(`LOGGIN`, test);

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
