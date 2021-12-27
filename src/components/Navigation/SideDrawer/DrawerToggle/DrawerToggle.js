import React from 'react';

import classes from './DrawerToggle.css';

//import burgerLogo from '../../assets/images/burger-logo.png';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;