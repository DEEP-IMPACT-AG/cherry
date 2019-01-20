import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch, Redirect } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import Head from '../Components/Head';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';
import { Content } from '../Components/Layout';
import riangle from '../assets/images/riangle.svg';
import github from '../assets/images/github.svg';

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
		<Footer>
			<Content>
				<a href="https://github.com/DEEP-IMPACT-AG/cherry" target="_blank">
					<img src={github} alt="GitHub" />
				</a>
			</Content>
		</Footer>
	</div>
);
