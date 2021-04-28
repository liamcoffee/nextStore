import styled from 'styled-components';

import { Text } from '../Text';

export const ProductGridImg = styled.img`
	width: 100%;
`;

export const ProductText = styled(Text)`
	color: ${(props) => props.theme.colors.black};
	transition: all 0.2s ease-in-out;
	font-style: italic;
`;

export const ProductHr = styled.hr`
	width: 80%;
	transition: all 0.2s ease-in-out;
	display: inline-block;
	height: 1px;
	border: 0;
	border-top: 1px solid ${(props) => props.theme.colors.black};
	margin: 1em 0;
	padding: 0;
`;

export const ProductWrap = styled.div`
	cursor: pointer;
	text-align: center;
	position: relative;
	display: grid;
	align-items: end;

	&:hover ${Text} {
		color: ${(props) => props.theme.colors.peach};
	}

	&:hover hr {
		width: 100%;
		border-top: 1px solid ${(props) => props.theme.colors.peach};
	}
`;
