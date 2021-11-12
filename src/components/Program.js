//This function component is used for display eachradio schedule item
const Program = ({color,program}) => {

   //Comver from ms to format hh:mm
   const convertMsToTime = (msTime) =>
   {
       var time = new Date(msTime);
       var hh = ('0' + time.getHours()).slice(-2);
       var min = ('0' + time.getMinutes()).slice(-2);
       return hh + ":" + min;
   }
   const startTime = parseInt(program.starttimeutc.substr(6));
   const endTime = parseInt(program.endtimeutc.substr(6));

   //Render an radio schedule
   return (
      <div>
         {(startTime >  Date.now()) ?
         <article style={{backgroundColor: '#'+color}}>
            <h3>{program.title}</h3>
            <h4>{program.subtitle}</h4>
            <h5>{convertMsToTime(startTime)}  - {convertMsToTime(endTime)}</h5>
            <p>{program.description}</p>
         </article>
         : ''
         }
      </div>
   )
}

export default Program
