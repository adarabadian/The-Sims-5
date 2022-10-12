import React, { useContext } from 'react';
import {  AppBar,  Toolbar,  Button} from "@material-ui/core";
import "./Header.css";
// import { PacmanLoader } from "react-spinners";
// import { ReactReduxContext } from 'react-redux';
import Clock from '../Clock/Clock';

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

export default Header

