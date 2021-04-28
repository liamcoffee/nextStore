import { Box } from './Box';
import { NavBar } from '@components';

import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
	return (
		<Box width='100%' mx='auto' maxWidth={1300} px={6}>
			<NavBar />
			<Box pt={'110px'}>{children}</Box>
		</Box>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
