// test-utils.js
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { initializeApollo } from '@lib/apolloClient';

const apolloClient = initializeApollo();

function Providers(options) {
	const wrapper = ({ children }) => (
		<MockedProvider {...options} apolloClient={apolloClient}>
			{children}
		</MockedProvider>
	);

	return wrapper;
}

const customRender = (ui, options = {}) => {
	const wrapper = Providers(options);
	return render(ui, { wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
