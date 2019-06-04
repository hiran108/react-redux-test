import List from "./components/list";
import React from "react";
import Form from "./components/form";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navi-bar';
const App = () => (
  <div>
  <AppBar color="primary" position="static">
    
    <NavBar/>
  </AppBar>
  <Form></Form>
  <List></List>
</div>
);
export default App;
