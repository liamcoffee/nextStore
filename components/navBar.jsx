import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

const NavBarWrapper = styled.nav`
	width: 100%;
	border: 1px solid ${(props) => props.theme.colors.white};
	background-color: black;
	text-align: left;
`;

const NavList = styled.ul`
	padding: 0;
	margin: 0;
`;

const NavItem = styled.li`
	text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
	list-style: none;
	display: inline-block;
	color: ${(props) => props.theme.colors.white};
	border: 1px solid ${(props) => props.theme.colors.black};
	border-right: 1px solid ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.space[3]};
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.colors.black};
		background-color: ${(props) => props.theme.colors.white};
	}
`;

export const NavBar = () => {
	const router = useRouter();

	return (
		<NavBarWrapper>
			<NavList>
				<Link href={`/`}>
					<NavItem isActive={router.pathname === '/'}>Home</NavItem>
				</Link>
				{/* Dead links just for show */}
				<NavItem>Soaps</NavItem>
				<NavItem>Bath bombs</NavItem>
			</NavList>
		</NavBarWrapper>
	);
};
