import styled from 'styled-components';
import { space } from 'styled-system';

export const Button = styled.button`
	${(props) => props.theme.text.lead};
	align-items: center;
	appearance: none;
	border: 1px solid;
	cursor: pointer;
	display: flex;
	font-weight: bold;
	height: 2rem;
	justify-content: center;
	position: relative;

	&:hover {
	}

	${space};
`;
