import React, { Fragment } from 'react';
import universal from 'react-universal-component';
import GoogleTagManager from '../Components/GoogleTagManager';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Route, Switch, Redirect } from 'react-router';
import { Loading } from '../Components/Layout';
import '../assets/css/styles.css';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export default ({ staticContext }) => (
	<Fragment>
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
			<Route
				exact
				path="/styling-structure"
				render={routeProps => <UniversalComponent page="StylingStructure" {...routeProps} />}
			/>
			<Route
				exact
				path="/typography"
				render={routeProps => <UniversalComponent page="Typography" {...routeProps} />}
			/>
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<Footer />
	</Fragment>
);
