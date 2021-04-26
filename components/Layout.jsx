import { Box } from './Box';
import { Header } from '@components';
export const Layout = ({ children }) => {
	return (
		<Box width='100%' mx='auto' maxWidth={1300}>
			<Header title='soap shop' description='test' />
			{children}
		</Box>
	);
};
