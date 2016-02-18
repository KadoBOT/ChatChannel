import React, { Component } from 'react';
import {Avatar, ListItem} from 'material-ui';

class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListItem leftAvatar={
        <Avatar src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAYcAAAAJGFiM2U2MzNiLTUwYjUtNDdmNS05MDMwLWM0NGNjODA5YjY2Yw.jpg" />
      }>
        {this.props.message}
      </ListItem>
    )
  }
}

export default Message;
