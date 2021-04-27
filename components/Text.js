import styled from "styled-components";
import {
	fontWeight,
	space,
	typography,
	variant,
	color,
	shadow,
} from "styled-system";
const textVariant = variant({ key: "text", prop: "text" });
/** Generic Text component bound to `text` prop in theme. */
export const Text = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	${(props) => (props.text ? textVariant : props.theme.text.p)}
	${space}
	${fontWeight}
    ${typography}
    ${color}
	${shadow}
`;
