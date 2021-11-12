//Importing some NPM modules
import React from "react";
import Header from "./components/Header";
import Channels from "./components/Channels";
import axios from "axios";

//Is the top parent that is starting the app
// This app has the following features
//1. Show channels to the left
//2. Show radio schedule for selected channel to the right
//3. Dbl click on radio name to show home page for the channel
//4. Select a radio channel in ddl to play
//5. Change the number of chanels to display

class App extends React.Component {
  state = { channels:[], mp3:'', prgm:[]};

  //After the component is rendered this method is called.
  //We use env file to handle the url and nr of channels to display
  componentDidMount() {
    const url = process.env.REACT_APP_SR_API + process.env.REACT_APP_ROWS;
    this.getChannels(url);
  }

  //Make a call to REST-API to get channels to display
  //We keep the channels in state
  async getChannels(url) {
    const res = await axios.get(url);
    this.setState({ channels: res.data.channels });
  }

  //Make a call to REST-API to get radio schedule
  //We keep the radio schedule in state
  async getPrgmTabla(url) {
    const res = await axios.get(url);
    this.setState({ prgm: res.data.schedule });
  }

  //Is handling to scroll down to radio player
  onClickScroll = () => {
     if(this.state.mp3 !=='')
     document.getElementById("myForm").scrollIntoView();
  }

  // Updating mp3 state with selected channel in DDL
  onChange = (mp3) => {
   this.setState({mp3: mp3})
  }

  //Make a call to update the radio channels
  //When updating channels we must remove radio schedule
  onAdd = (text) => {
    const url = process.env.REACT_APP_SR_API + text.text;
    this.getChannels(url);
    this.setState({prgm: ''})
  }

  // This event handler is called when we click on a channel
  // When we do so we want to show the radio schedule
  // So here a filter out the id for the selected channel
  onClickTbl = (e) => {
    const channel = this.state.channels.filter(channel => {
      return channel.id === parseInt(e.currentTarget.dataset.id);
    });

    //Make a call to Sveriges Radio REST-API to get radio schedule
    this.getPrgmTabla(channel[0].scheduleurl + "&format=json&indent=true&size=200");
  }

  //Here we render by using JSX
  render() {
    //Get the channel names to be displayed in DDL
    const names = this.state.channels.map((channel, idx) => {
      return { text: channel.name, key: idx, value: channel.liveaudio.url, id:channel.id };
    });

    //Here we start by using the Header component
    //Channels component and RadioPlyer component
    return (
      <div className="App">
        <Header title="Consume SR REST-API" channelNames={names}
          onClickScroll={this.onClickScroll}   /* Prepare radio player */
          onChange={this.onChange} /* Update state for mp3 */
        />
        
        <Channels mp3 ={this.state.mp3}  onAdd={this.onAdd} channels={this.state.channels} programs={this.state.prgm}  subTitle="SR-Sveriges Radio" onClickTbl={this.onClickTbl} />
      </div>
    );
  }
}

export default App;
