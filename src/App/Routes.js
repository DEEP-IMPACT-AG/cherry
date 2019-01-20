import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch, Redirect } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import Head from '../Components/Head';
import Footer from '../Components/Footer';
import { Content, Loading } from '../Components/Layout';
import GoogleTagManager from '../Components/GoogleTagManager';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export default ({ staticContext }) => (
	<div>
		<GoogleTagManager gtmId="GTM-K8M4PWZ" />
		<Head />
		<Nav />
		<Switch>
			<Route
				exact
				path="/index.html"
				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
			/>
			<Route
				exact
				path="/"
				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
			/>
			<Route
				exact
				path="/code-guidelines"
				render={routeProps => <UniversalComponent page="CodeGuidelines" {...routeProps} />}
			/>
			<Route
				exact
				path="/sketch"
				render={routeProps => <UniversalComponent page="Sketch" {...routeProps} />}
			/>
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<Footer />
	</div>
);
