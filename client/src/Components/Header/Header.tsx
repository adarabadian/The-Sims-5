import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Header.css";
import Clock from "../Clock/Clock";

function Header() {
	return (
		<>
			<AppBar position="static" id="appHeader">
				<Toolbar>
					<Clock />
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;
