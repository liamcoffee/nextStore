import PropTypes from 'prop-types';
import { Box, Text } from '@components';
import { StyledSelect } from './Product.styled';

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
			<Text text='h3' as='label' htmlFor='categories'>
				Category:
			</Text>

			{/* Hard coded categories for demo */}
			<StyledSelect
				value={filter?.categories}
				name='categories'
				id='categories'
				onChange={onCatChange}
			>
				<option value='__all__'>All</option>
				<option data-testid='viewBody' value='Q2F0ZWdvcnk6MQ=='>
					Body
				</option>
				<option value='Q2F0ZWdvcnk6Mg=='>Face</option>
				<option value='Q2F0ZWdvcnk6Nw=='>Soap</option>
			</StyledSelect>

			<Text text='h3' as='label' htmlFor='viewAmount'>
				View:
			</Text>

			<StyledSelect
				value={viewAmount}
				name='viewAmount'
				id='viewAmount'
				onChange={onViewAmountChange}
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
