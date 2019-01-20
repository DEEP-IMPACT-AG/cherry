import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import { Content, Wrapper } from '../../Components/Layout';
import styles from './NotFound.css';
import { Status } from '../../Components/Status';

function NotFound() {
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • Not Found" />
			<Status code={404} />
			<Content>
				<Wrapper>
					<h1>Not Found</h1>
					<div>404 Error - Page not found.</div>
				</Wrapper>
			</Content>
		</Fragment>
	);
}

export default NotFound;
