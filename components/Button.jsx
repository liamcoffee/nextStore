import styled from 'styled-components';
import { space } from 'styled-system';

export const Button = styled.button`
	${(props) => props.theme.text.h3};

	position: relative;
	display: inline-block;
	background-color: ${(props) => props.theme.colors.jet};
	color: ${(props) => props.theme.colors.white};
	padding: 1.25rem 2.5rem;
	text-transform: uppercase;
	cursor: pointer;
	transition: background-color 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.jet};

	&:hover {
		background-color: ${(props) => props.theme.colors.black};

		border: 1px solid ${(props) => props.theme.colors.jet};
	}

	${space};
`;
