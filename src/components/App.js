import React, { Component } from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import mui, {AppBar} from 'material-ui';
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
          <div style={{
              display: 'flex',
              flexFlow: 'row wrap',
              maxWidth: 1200,
              width: '100%',
              margin: '30px auto 30px'
          }}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
