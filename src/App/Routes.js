import React, { Fragment, Component } from "react";
import universal from "react-universal-component";
import GoogleTagManager from "../Components/GoogleTagManager";
import Head from "../Components/Head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Route, Switch, Redirect } from "react-router";
import { Loading } from "../Components/Layout";
import "../assets/css/styles.css";

const isProd = process.env.NODE_ENV === "production";

const UniversalComponent = universal(
	(props) => import(`../Views/${props.page}`),
	{
		loading: () => <Loading />,
		ignoreBabelRename: true,
	},
);

export default class Routes extends Component {
	render() {
		const { staticContext } = this.props;

		return (
			<Fragment>
				{isProd ? <GoogleTagManager gtmId="GTM-K8M4PWZ" /> : ""}
				<Head />
				<Nav />
				<Switch>
					<Route
						exact
						path="/index.html"
						render={(routeProps) => (
							<UniversalComponent page="Home" {...routeProps} />
						)}
					/>
					<Route
						exact
						path="/"
						render={(routeProps) => (
							<UniversalComponent page="Home" {...routeProps} />
						)}
					/>
					<Route
						exact
						path="/code-guidelines"
						render={(routeProps) => (
							<UniversalComponent
								page="CodeGuidelines"
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path="/design/sketch"
						render={(routeProps) => (
							<UniversalComponent page="Sketch" {...routeProps} />
						)}
					/>
					<Route
						exact
						path="/design/typography"
						render={(routeProps) => (
							<UniversalComponent
								page="Typography"
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path="/css/styling-structure"
						render={(routeProps) => (
							<UniversalComponent
								page="StylingStructure"
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path="/css/css-grid"
						render={(routeProps) => (
							<UniversalComponent
								page="CSSGrid"
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path="/npm/grid-components"
						render={(routeProps) => (
							<UniversalComponent
								page="GridComponents"
								{...routeProps}
							/>
						)}
					/>
					<Route
						render={(routeProps) => (
							<UniversalComponent
								page="NotFound"
								{...routeProps}
							/>
						)}
					/>
				</Switch>
				<Footer />
			</Fragment>
		);
	}
}
