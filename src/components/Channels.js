//Import some npm modules
//I use a npm module for creating guid
import Channel from "./Channel";
import Program from "./Program";
import { v4 as uuidv4 } from "uuid";
import {useState} from 'react';
import RadioPlayer from "./RadioPlayer";
import ReactAudioPlayer from "react-audio-player";

//Function component Channel
//Arguments:
//mp3=Is the mp3 that is selected
//onAdd = Is called when we have change the nr of channels to display
//channels = Contains all the channels to be displayed
//programs= Contains the radio schedule for a selected channel
//subTitle= Is the subTitle to be displayed
//onClickTbl= Is called when we want to have a radio schedule
const Channels = ({mp3,onAdd,channels,programs,subTitle,onClickTbl }) => {
  let color; //We need to fetch color in channels
  const [text, setText] = useState('10'); //handle state in form

  //Get channel color for selected channel
  if (programs.length > 0) {
    color = channels
      .filter((channel) => {
        return channel.id === programs[0].channel.id;
      })
      .map((obj) => {
        return obj.color;
      });
  }

  //Is called when submit the form
  //We call onAdd in app.js
  const onSubmit = (e) => 
  {
     e.preventDefault(); //prevent the form from refreshing
     onAdd({text});
     setText('');
  }


  return (
    <div className="channels">
      <div style={{ width: "250px" }}>
        <h2>{subTitle}</h2>
        <ul>
          {/* loop through and display each channel */}
          {channels.map((channel) => {
            return (
              <Channel key={channel.id} channel={channel} onClickTbl={onClickTbl} />
            );
          })}
        </ul>

        {/* Form for handling a change of channels to display */}
        <form className="add-form" id='myForm' onSubmit ={onSubmit}>
          <div className="form-control">
            <label>Nr of channels</label>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
          </div>

          <input type="submit" value="Save" className="btn" />
        </form>

        {/* Show the radio player */}
        {/* <RadioPlayer mp3 ={mp3} /> */}
        <div style= {mp3!=='' ? {display:'block'} : {display:'none'}} >
          <ReactAudioPlayer src={mp3} controls />
        </div>


      </div>

        {/* Loop through and display a radio schedule for each item */}
         {/* We prevent calling map if radio schedule is empty */}
      <div style={{ width: "600px" }}>
        {programs.length > 0 ? (programs.map((program) => {
          return (
            <Program
              color={color[0]}
              key={uuidv4()}
              program={program}
              onClickTbl={onClickTbl}
            />
          );
        })) : ''}
      </div>
    </div>
  );
};

export default Channels;
