import { products } from '@queries/productQuery';
import { ProductList } from '@components/ProductList';
import { Header } from '@components/Header';
import { initializeApollo } from '@lib/apolloClient';
import { CHANNEL } from '@lib/consts';

export default function Home() {
	return (
		<div>
			<Header title='soap shop' description='test' />
			<main>
				<div>
					<h1 role='heading' style={{ textAlign: 'center' }}>
						SHOP!!
					</h1>
					<ProductList first={5} channel={CHANNEL} />
				</div>
			</main>
			<footer>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' />
				</a>
			</footer>
		</div>
	);
}

export async function getServerSideProps() {
	// Run queries for page, and store in clients cache
	// Could skip cache and return data as prop

	const apolloClient = initializeApollo();

	console.log(`got the vlient`, apolloClient);

	await apolloClient.query({
		query: products,
		variables: {
			first: 5,
			channel: CHANNEL,
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
