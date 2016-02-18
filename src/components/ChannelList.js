import React, { Component } from 'react';
import Channel from './Channel';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

class ChannelList extends Component{
  constructor(props){
    super(props);
    this.state = { channel: ['Dogs', 'Cats'] };
  }

  render(){
    let channels = this.state.channel.map( channel => {
      return <Channel channel={channel} />
    })
    return (
      <Card style={{
          flexGrow: 1
        }}>
        <List>
          {channels}
        </List>
      </Card>
    )
  }
}

export default ChannelList;
