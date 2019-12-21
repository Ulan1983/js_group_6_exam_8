import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">Quotes Central</div>
			<nav className="main_nav">
				<NavLink to="/">Quotes</NavLink>
				<NavLink to="/add-quote">Submit new quote</NavLink>
			</nav>
		</header>
	);
};

export default Header;