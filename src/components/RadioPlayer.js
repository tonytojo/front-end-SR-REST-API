import ReactAudioPlayer from "react-audio-player";

const RadioPlayer = ({ mp3 }) => {
  return (
    <div style= {mp3!=='' ? {display:'block'} : {display:'none'}} >
      <ReactAudioPlayer src={mp3} controls />
    </div>
  );
};

export default RadioPlayer;
