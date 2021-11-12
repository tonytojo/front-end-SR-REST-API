//This is the function component that display each radio channel
//Arguments:
//channel = Is the radio channel object we want to display
//onClickTbl = Event handler to show radio schedule for a channel
const Channel = ({channel, onClickTbl}) => {
   return (
      <>
         <li style={{cursor: 'pointer'}} data-id={channel.id} title={channel.tagline} onClick={onClickTbl.bind(this)}>
            <img className='img' src={channel.imagetemplate} alt={channel.name} />
             <span className='span-pos'> 
                  <a target='_blank'  href={channel.siteurl}>{channel.name} webb </a>
             </span>
         </li>
      </>
   )
}

export default Channel
