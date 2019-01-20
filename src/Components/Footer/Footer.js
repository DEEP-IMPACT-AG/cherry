import React from 'react';
import classNames from 'classnames';
import { GitHub } from '../../assets/svg';
import { Content } from '../Layout';
import styles from './Footer.css';

function Footer({ className }) {
	return (
		<footer className={classNames(styles.footer, className)}>
			<Content>
				<a href="https://github.com/DEEP-IMPACT-AG/cherry" target="_blank">
					<GitHub />
				</a>
			</Content>
		</footer>
	);
}

export default Footer;
