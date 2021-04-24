import Head from 'next/head';
import PropTypes from 'prop-types';

export const Header = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta property='og:type' content='website' />
			<meta name='og:title' property='og:title' content={title} />
			<meta
				name='og:description'
				property='og:description'
				content={description}
			/>
			<meta property='og:site_name' content='' />
			<meta property='og:url' content='' />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:site' content='' />
			<meta name='twitter:creator' content='' />
			<link rel='icon' type='image/png' href='/favicon.ico' />
			<link rel='apple-touch-icon' href='/favicon.ico' />
			<link rel='stylesheet' href='' />
			<meta property='og:image' content='' />
			<meta name='twitter:image' content='' />
			<link rel='canonical' href='' />
			<script type='text/javascript' src=''></script>
		</Head>
	);
};
Header.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
