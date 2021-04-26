import { Box } from './Box';
import { Text } from './Text';
import { NavBar } from './NavBar';

export const Header = () => {
	return (
		<Box>
			<Text textAlign='center' fontSize={'15rem'}>
				SUDDDS
			</Text>
			<NavBar />
		</Box>
	);
};
