import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">Quotes Central</div>
			<nav className="main_nav">
				<NavLink to="/">Quotes</NavLink>
				<NavLink to="/quotes/submit">Submit new quote</NavLink>
			</nav>
		</header>
	);
};

export default Header;