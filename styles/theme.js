const calculateLineHeight = (fontSize, lineHeight) =>
	(lineHeight / fontSize).toFixed(3);

const calculateRem = (px) => `${px / 16}rem`;

const fontSizes = {
	h1: calculateRem(30),
	h2: calculateRem(18),
	h3: calculateRem(16),
	h4: calculateRem(14),
	h5: calculateRem(13),
	lead: calculateRem(13),
	p: calculateRem(12),
};

const lineHeights = {
	// LineHeightPx / SizePx
	h1: calculateLineHeight(30, 35),
	h2: calculateLineHeight(18, 20),
	h3: calculateLineHeight(16, 18),
	h4: calculateLineHeight(14, 16),
	h5: calculateLineHeight(13, 15),
	lead: calculateLineHeight(13, 20),
	p: calculateLineHeight(12, 14),
};

const fontWeights = {
	regular: 400,
	medium: 500,
	bold: 700,
};

const textStyle = (variant) => ({
	lineHeight: lineHeights[variant],
	fontSize: fontSizes[variant],
	fontWeight: fontWeights.regular,
});

export const theme = {
	colors: {
		black: '#000000',
		white: '#ffffff',
		peach: '#f0bfb6',
	},
	fontSizes,
	fontWeights,
	lineHeights,
	text: {
		h1: textStyle('h1'),
		h2: textStyle('h2'),
		h3: textStyle('h3'),
		h4: textStyle('h4'),
		h5: textStyle('h5'),
		p: textStyle('p'),
		lead: textStyle('lead'),
	},
	space: [
		0,
		'.25rem',
		'.5rem',
		'.75rem',
		'1rem',
		'1.25rem',
		'1.5rem',
		'1.75rem',
		'2rem',
	],
	breakpoints: ['40em', '52em', '81.25em'],
};
