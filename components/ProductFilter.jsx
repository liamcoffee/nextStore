import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Text } from '@components';

const StyledSelect = styled.select`
	display: block;
	color: #444;
	padding: 0.6em 1.4em 0.5em 0.8em;
	width: 200px;
	max-width: 200px;
	margin: 0;
	border: 1px solid ${(props) => props.theme.colors.black};
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
`;

export const ProductFilter = ({
	viewAmount,
	filter,
	onCatChange,
	onViewAmountChange,
}) => {
	return (
		<Box
			p={3}
			borderTop='1px solid'
			borderBottom='1px solid'
			py={6}
			my={6}
			display='flex'
			alignItems='center'
			gridGap={8}
		>
			<Text text='h3'>Category:</Text>

			{/* Hard coded categories for demo */}
			<StyledSelect
				value={filter?.categories}
				name='categories'
				id='categories'
				onChange={(e) => onCatChange(e)}
			>
				<option value='__all__'>All</option>
				<option value="'Q2F0ZWdvcnk6MQ=='">Body</option>
				<option value="'Q2F0ZWdvcnk6Mg=='">Face</option>
				<option value="'Q2F0ZWdvcnk6Nw=='">Soap</option>
			</StyledSelect>

			<Text text='h3'>View:</Text>

			<StyledSelect
				value={viewAmount}
				name='viewAmount'
				id='viewAmount'
				onChange={(e) => onViewAmountChange(e)}
			>
				<option value='20'>20</option>
				<option value='30'>30</option>
				<option value='40'>40</option>
			</StyledSelect>
		</Box>
	);
};

ProductFilter.propTypes = {
	viewAmount: PropTypes.number,
	filter: PropTypes.shape({
		categories: PropTypes.string,
	}),
	onCatChange: PropTypes.func,
	onViewAmountChange: PropTypes.func,
};
