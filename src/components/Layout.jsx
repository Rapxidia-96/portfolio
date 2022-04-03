import React from 'react';
import Header from '../components/Header';
import Hero from './Hero';
import Portfolio from "./Portfolio"

const Layout = () => {
	return (
		<div className="Layout">
			<Header />
			<Hero />
			<Portfolio />
		</div>
	);
}

export default Layout;
