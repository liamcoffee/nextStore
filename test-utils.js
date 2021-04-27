import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

function Providers(options) {
	const wrapper = ({ children }) => (
		<MockedProvider {...options.apollo}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
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
