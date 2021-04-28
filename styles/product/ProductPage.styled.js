import styled from 'styled-components';

export const LargeProductImage = styled.img`
	max-width: 100%;
	height: auto;
	margin: 0 auto;
	display: block;
`;

export const QtyBox = styled.input`
	width: 3rem;
	${(props) => props.theme.text.h3};
	color: ${(props) => props.theme.colors.black};
	appearance: none;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	height: 3.7rem;
	text-align: center;
	margin-right: ${(props) => props.theme.space[6]};
`;

export const ShowMore = styled.div`
	width: 100%;
	height: 30px;
	z-index: 99;
	position: absolute;
	bottom: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid;
	border-bottom: 1px solid;
	background-color: white;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		background-color: black;
		color: white;
	}
`;

export const ProductDescription = styled.div`
	transition: max-height 0.15s ease-out;
	max-height: ${(props) => (props.showingMore ? '1000px' : '300px')};
	overflow: hidden;
	position: relative;
	padding-bottom: ${(props) => props.theme.space[8]};
`;

export const Stock = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	background-color: ${(props) => props.theme.colors.jet};
	border-radius: 50%;
	padding: ${(props) => props.theme.space[3]};

	min-width: 6rem;
	min-height: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
