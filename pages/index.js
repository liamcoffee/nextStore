import styles from '../styles/Home.module.css';

import { products } from 'queries/productQuery';
import { ProductList } from 'components/ProductList';
import { Header } from 'components/Header';
import { initializeApollo } from 'lib/apolloClient';
import { CHANNEL } from 'lib/consts';

export default function Home() {
	return (
		<div className={styles.container}>
			<Header title='soap shop' description='test' />
			<main className={styles.main}>
				<div>
					<h1 style={{ textAlign: 'center' }}>Products</h1>
					<ProductList first={5} channel={CHANNEL} />
				</div>
			</main>
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
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
