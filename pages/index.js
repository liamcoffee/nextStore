import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { products } from '../queries/productQuery';
import Product from '../components/product';
import ProductList from '../components/ProductList';
import { initializeApollo } from '../lib/apolloClient';
import { useQuery } from '@apollo/client';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div>
					<h1 style={{ textAlign: 'center' }}>Products</h1>
					<ProductList />
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
			channel: 'uk',
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
