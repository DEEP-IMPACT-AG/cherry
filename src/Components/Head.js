import React from 'react';
import { Helmet } from 'react-helmet-async';

const isProd = process.env.NODE_ENV === 'production';

function Head({
	title = 'Cherry • Design System',
	description = 'Cherry is a live inventory of definitions for the UI components, design patterns, naming conventions, brand assets and code guidelines.',
	image = 'https://res.cloudinary.com/deep-impact-ag/image/upload/cherry/og.jpg',
	children,
}) {
	return (
		<Helmet>
			<meta name="google-site-verification" content="faiA8UXuBoMevueS2UNKmSDFsNQAJsLh1nGnQYnCfYI" />
			<meta http-equiv="" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/cherry/favicon.ico"
				type="image/x-icon"
			/>
			<link
				rel="icon"
				sizes="192x192"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/cherry/manifest/192.jpg"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/cherry/manifest/192.jpg"
			/>
			{children && children}
			<title>{title}</title>
		</Helmet>
	);
}

export default Head;
