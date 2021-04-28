import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Box } from './Box';

const NavBarWrapper = styled.nav`
	width: 100%;
	background-color: black;
	position: absolute;
	left: 0;
	right: 0;
	padding: ${(props) => props.theme.space[3]};
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-height: 110px;
`;

const NavItem = styled.li`
	text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
	list-style: none;
	display: inline-block;
	color: ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.space[3]};
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.colors.black};
		background-color: ${(props) => props.theme.colors.white};
	}
`;

const BasketIcon = styled(Image)`
	fill: white;
`;

export const NavBar = () => {
	const router = useRouter();

	return (
		<NavBarWrapper>
			<Box
				maxWidth={1300}
				width='100%'
				display={['block', 'flex', 'flex']}
				textAlign='center'
				alignItems='center'
				justifyContent='space-between'
				px={6}
			>
				<Link href={`/`}>
					<a>
						<Image src='/logo.svg' height={80} width={230} />
					</a>
				</Link>

				<Box
					p={0}
					m={0}
					as='ul'
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<Link href={`/`}>
						<NavItem isActive={router.pathname === '/'}>Home</NavItem>
					</Link>
					{/* Dead links just for show */}
					<NavItem>Soaps</NavItem>
					<NavItem>Bath bombs</NavItem>
					<NavItem>
						<BasketIcon src='/../public/basket.png' height={30} width={30} />
					</NavItem>
				</Box>
			</Box>
		</NavBarWrapper>
	);
};
