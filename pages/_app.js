import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import { Layout } from '@components';

const GlobalStyle = createGlobalStyle`
all: unset;
	

	body {
		margin: 0;
	}

	* {
		font-family: 'Open Sans', sans-serif;
		box-sizing: border-box;
	}
  	
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
