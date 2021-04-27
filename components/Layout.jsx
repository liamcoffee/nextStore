import { Box } from './Box';
import { NavBar } from '@components';
export const Layout = ({ children }) => {
	return (
		<Box width='100%' mx='auto' maxWidth={1300}>
			<NavBar/>
			{children}
		</Box>
	);
};
