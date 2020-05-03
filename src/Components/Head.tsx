import React from "react";
import { Helmet } from "react-helmet-async";
const favicon =
	"https://cherry-design.s3-eu-west-1.amazonaws.com/meta/favicon.ico";
const preview =
	"https://cherry-design.s3-eu-west-1.amazonaws.com/meta/preview.jpg";
const icon512 = "https://cherry-design.s3-eu-west-1.amazonaws.com/meta/512.png";
const icon192 = "https://cherry-design.s3-eu-west-1.amazonaws.com/meta/192.png";

const isProd = process.env.NODE_ENV === "production";

interface HeadProps {
	description?: string;
	title?: string;
	image?: string;
	children?: any;
}

function Head({
	title = "Cherry • Design System",
	description = "Cherry is a live inventory of definitions for the UI components, design patterns, naming conventions, brand assets and code guidelines.",
	image = preview,
	children,
}: HeadProps) {
	return (
		<Helmet>
			<meta
				name="author"
				content="Luan Gjokaj, Deep-Impact Design Team, and Cherry contributors"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" sizes="512x512" href={icon512} />
			<link rel="apple-touch-icon" sizes="192x192" href={icon192} />
			<link rel="apple-touch-icon-precomposed" href={icon192} />
			<link rel="icon" sizes="192x192" href={icon192} />
			{description && <meta name="description" content={description} />}
			{title && <meta property="og:title" content={title} />}
			{description && (
				<meta property="og:description" content={description} />
			)}
			{image && <meta property="og:image" content={image} />}
			{children && children}
			{title && <title>{title}</title>}
		</Helmet>
	);
}

export default Head;
