import "@babel/polyfill";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import ScrollToTop from "../Components/ScrollToTop";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<ScrollToTop>
					<Routes />
				</ScrollToTop>
			</Router>
		);
	}
}
