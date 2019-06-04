import React from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const mapStateToProps = state => {
  return { users: state.users };
};
const ConnectedList = ({ users }) => (
  <div>
    {users.map(el => (
      <Paper zDepth={5}>
          <Typography variant="h5" component="h3">
          First Name: {el.firstName}
        </Typography>
        <Typography component="p">
         Email: {el.email}
        </Typography>
        <Typography component="p">
         Last Name: {el.lastName}
        </Typography>
       
      </Paper>
    ))}


  </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;