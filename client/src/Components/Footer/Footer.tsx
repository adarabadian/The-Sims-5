import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu';
import FooterSimsPicker from '../FooterSimsPicker/FooterSimsPicker';
import TasksQueue from '../TasksQueue/TasksQueue';
import './Footer.css'

export default function Footer() {
	return (
		<div className="footer">
			<FooterSimsPicker />
			<TasksQueue />
			<FooterMenu />
		</div>
	);
}
