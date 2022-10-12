import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu';
import FooterSimsPicker from '../FooterSimsPicker/FooterSimsPicker';
import Stats from '../Stats/Stats'
import './Footer.css'

export default function Footer() {
	return (
		<div className='footer'>
			<FooterSimsPicker />
			<FooterMenu />
		</div>
	);
}
