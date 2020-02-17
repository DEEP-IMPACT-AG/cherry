import React from "react";
import { Helmet } from "react-helmet-async";
const favicon = require("../assets/img/favicon.ico");

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
	image = "https://res.cloudinary.com/deep-impact-ag/image/upload/cherry/og.jpg",
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
			<link
				rel="apple-touch-icon"
				sizes="512x512"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1564693640/cherry/reactfondue/512.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="192x192"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1547922882/cherry/manifest/192.jpg"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1547922882/cherry/manifest/192.jpg"
			/>
			<link
				rel="icon"
				sizes="192x192"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1547922882/cherry/manifest/192.jpg"
			/>
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
