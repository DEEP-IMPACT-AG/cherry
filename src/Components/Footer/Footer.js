import React from 'react';
import classNames from 'classnames';
import styles from './Footer.css';

function Footer({ className, children }) {
	return (
		<footer className={classNames(styles.footer, className)}>{children}</footer>
	);
}

export default Footer;
