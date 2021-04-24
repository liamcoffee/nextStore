import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

let apolloClient;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined', // set to true for SSR
		uri: 'https://twstg2.eu.saleor.cloud/graphql/',
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
