import React, { Component } from 'react';
import MessageList from './MessageList';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const muiTheme = getMuiTheme({
  pallete: {
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
  },
});

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Awesome Chat App" />
          <MessageList />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
