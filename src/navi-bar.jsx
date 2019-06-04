import React from 'react';
import {Tab,Tabs} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import Form from "./components/form";

function NavBar(props) {

    return (
        <Tabs>
            <Tab label="New user" value={Form} ></Tab>
            <Tab label="Exisisting users" />
        </Tabs>
    )
}


export default NavBar;