import styles from 'styles/Home.module.css';
import PropTypes from 'prop-types';

import { singleProduct } from 'queries/productQuery';

import { initializeApollo } from 'lib/apolloClient';
import { useQuery } from '@apollo/client';

import { Button } from '@components/Button';

import { Header } from '@components/Header';

import { CHANNEL } from 'lib/consts';

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
		error,
	} = useQuery(singleProduct, {
		variables: {
			slug,
			channel: CHANNEL,
		},
	});

	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<div className={styles.container}>
			<Header title={product.seoTitle} description={product.seoDescription} />

			{product.name}
			<img src={product.thumbnail.url} alt={product.thumbnail.alt} />
			{generateDescriptionBlock(product.description)}
			<Button>Buy Now</Button>
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
