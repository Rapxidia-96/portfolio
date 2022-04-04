import React from 'react';
import '../styles/Layout.scss'
import Header from '../components/Header';
import Hero from './Hero';
import Portfolio from "./Portfolio";

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<Hero />
			<Portfolio />
		</div>
	);
}

export default Layout;
