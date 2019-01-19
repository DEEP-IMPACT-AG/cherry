import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch, Redirect } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import Head from '../Components/Head';
import Loading from '../Components/Loading';
import riangle from '../assets/images/riangle.svg';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export default ({ staticContext }) => (
	<div>
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
				path="/about"
				render={routeProps => <UniversalComponent page="About" {...routeProps} />}
			/>
			<Route
				exact
				path="/article"
				render={routeProps => <UniversalComponent page="Article" {...routeProps} />}
			/>
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
	</div>
);
