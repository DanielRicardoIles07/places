import React from 'react';

import AppBar from 'material-ui/AppBar';
import {indigo400} from 'material-ui/styles/colors';


export default class MyAppBar extends React.Component{
  render(){
    return(
      <AppBar
        title="Places"
        onTitleTouchTap={this.props.goHome}
        style={{'backgroundColor': indigo400, 'cursor': 'pointer'}}
        showMenuIconButton={false}
      />
    );
  }
}
