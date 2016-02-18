import React, { Component } from 'react';
import Message from './Message';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

class MessageList extends Component{
  constructor(props){
    super(props);
    this.state = { message: ['Ola, how are you?', 'I am fine, and you?'] };
  }

  render(){
    let messages = this.state.message.map( message => {
      return <Message message={message} />
    })
    return (
      <Card>
        <List>
          {messages}
        </List>
      </Card>
    )
  }
}

export default MessageList;
