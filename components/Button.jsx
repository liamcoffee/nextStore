import styled from 'styled-components';
import { space } from 'styled-system';

export const Button = styled.button`
	${(props) => props.theme.text.lead};

	position: relative;
	display: inline-block;
	background: black;
	color: #fff;
	border: none;
	border-radius: 0;
	padding: 1.25rem 2.5rem;

	text-transform: uppercase;
	cursor: pointer;
	transform: translateZ(0);
	transition: color 0.3s ease;
	letter-spacing: 0.0625rem;
	border: 1px solid white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	${space};
`;
