import { Box } from './Box';

export const Layout = ({ children }) => {
	return (
		<Box width='100%' mx='auto' maxWidth={1300}>
			{children}
		</Box>
	);
};
