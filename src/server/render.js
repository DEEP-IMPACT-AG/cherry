import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../App/Routes';
import { HelmetProvider } from 'react-helmet-async';
import manifest from './manifest';
import sitemap from './sitemap';
import robots from './robots';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default ({ clientStats }) => (req, res) => {
	const context = {};
	const helmetContext = {};

	const app = renderToString(
		<HelmetProvider context={helmetContext}>
			<StaticRouter location={req.originalUrl} context={context}>
				<Routes />
			</StaticRouter>
		</HelmetProvider>
	);

	const { helmet } = helmetContext;

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const status = context.status || 200;

	if (context.status == 404) {
		console.log('Error 404: ', req.originalUrl);
	}

	if (req.url == '/manifest.json' || req.url == '/Manifest.json') {
		return res
			.header('Content-Type', 'application/manifest+json')
			.status(status)
			.send(manifest);
	}

	if (req.url == '/sitemap.xml') {
		return res
			.header('Content-Type', 'application/xml')
			.status(status)
			.send(sitemap);
	}

	if (req.url == '/robots.txt' || req.url == '/Robots.txt') {
		return res
			.header('Content-Type', 'text/plain')
			.status(status)
			.send(robots);
	}

	if (context.url) {
		const redirectStatus = context.status || 302;
		res.redirect(redirectStatus, context.url);
		return;
	}

	res
		.status(status)
		.send(
			`<!doctype html><html lang="en"><head><meta name="theme-color" content="#000000"/>${styles}${
				helmet.title
			}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}</body></html>`
		);
};
