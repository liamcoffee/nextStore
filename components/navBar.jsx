import PropTypes from 'prop-types';
import { Box } from './Box';
import { Text } from './Text';

import styled from 'styled-components';

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
	return (
		<NavBarWrapper>
			<NavList>
				<NavItem>lorem</NavItem>
				<NavItem>lorem</NavItem>
				<NavItem>lorem</NavItem>
			</NavList>
		</NavBarWrapper>
	);
};
