import React, { Fragment, Component } from "react";
import universal from "react-universal-component";
import GoogleTagManager from "../Components/GoogleTagManager";
import Head from "../Components/Head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Route, Switch, Redirect } from "react-router";
import { Loading, ContentPusher } from "../Components/Layout";
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
				<ContentPusher id="content-pusher">
					<Switch>
						<Route
							exact
							path="/index.html"
							render={(routeProps) => (
								<UniversalComponent
									page="Home"
									{...routeProps}
								/>
							)}
						/>
						<Route
							exact
							path="/"
							render={(routeProps) => (
								<UniversalComponent
									page="Home"
									{...routeProps}
								/>
							)}
						/>
						<Route
							exact
							path="/naming-convention"
							render={(routeProps) => (
								<UniversalComponent
									page="NamingConvention"
									{...routeProps}
								/>
							)}
						/>
						<Route
							exact
							path="/code-style-lint"
							render={(routeProps) => (
								<UniversalComponent
									page="CodeStyleLint"
									{...routeProps}
								/>
							)}
						/>
						<Route
							exact
							path="/design/sketch"
							render={(routeProps) => (
								<UniversalComponent
									page="Sketch"
									{...routeProps}
								/>
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
							path="/css/cherry-grid"
							render={(routeProps) => (
								<UniversalComponent
									page="CSSGrid"
									{...routeProps}
								/>
							)}
						/>
						<Route
							exact
							path="/npm/cherry-grid"
							render={(routeProps) => (
								<UniversalComponent
									page="NPMGrid"
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
				</ContentPusher>
				<Footer />
			</Fragment>
		);
	}
}
