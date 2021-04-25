// Generic box component extended with styled=system

import styled from 'styled-components';
import {
	background,
	border,
	flexbox,
	space,
	layout,
	grid,
} from 'styled-system';

export const Box = styled.div`
	min-width: 0;
	${border};
	${background};
	${space};
	${layout};
	${flexbox};
	${grid};
`;
