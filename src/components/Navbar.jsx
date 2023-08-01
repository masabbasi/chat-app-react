import React from 'react';
//Style
import "./Navbar.css"

const Navbar = ({logOutHandler}) => {
	return (
		<div className='navbarContainer'>
			<div className='name'>
				ChatApp
			</div>
			<div className='logout' onClick={logOutHandler}>
				LogOut
			</div>
		</div>
	);
};

export default Navbar;