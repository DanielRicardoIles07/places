import React from 'react';

import AppBar from 'material-ui/AppBar';
import {indigo400} from 'material-ui/styles/colors';
import loginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';


export default class MyAppBar extends React.Component{
  getName(){
    return this.props.user.email.split("@")[0];
  }
  title() {
    return(
    <span style={{'textTransform': 'capitalize'}}>
      {this.props.user.jwt ? 'Bienvenido ' + this.getName() : 'Places'}
    </span>
  );
  }
  render(){
    return(
      <AppBar
        title= {this.title()}
        onTitleTouchTap={this.props.goHome}
        style={{'backgroundColor': indigo400, 'cursor': 'pointer'}}
        showMenuIconButton={false}
      />
    );
  }
}
