import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import { Layout } from '@components';

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Open Sans', sans-serif;
	}
  	all: unset;
	box-sizing: border-box;

	&:hover,
	&:focus {
		outline: revert;
	}
`;

export default function App({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<ApolloProvider client={apolloClient}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</ThemeProvider>
		</>
	);
}
