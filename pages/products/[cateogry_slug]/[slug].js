import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import PropTypes from 'prop-types';

import { singleProduct } from '../../../queries/productQuery';

import { initializeApollo } from '../../../lib/apolloClient';
import { useQuery } from '@apollo/client';

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
		loading,
		error,
	} = useQuery(singleProduct, {
		variables: {
			slug,
			channel: 'uk',
		},
	});

	if (error) {
		return <h1>Error</h1>;
	}

	console.log(`log`, JSON.parse(product.description).blocks);

	console.log(`loggin`, loading, error);
	return (
		<div className={styles.container}>
			<Head>
				<title>{product.seoTitle}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content={product.seoDescription} />
			</Head>

			{product.name}
			{generateDescriptionBlock(product.description)}
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { slug } = query;
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: singleProduct,
		variables: {
			slug,
			channel: 'uk',
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			slug,
		},
	};
}
