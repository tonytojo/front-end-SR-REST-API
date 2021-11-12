//Import some npm modules
import Select from './Select'
import Button from './Button'

//The Header function component
//Arguments:
//title = The page title
//channelNames = Pass to Select componant
//onClickScroll = Pass to Button component
//onChange = Pass to Select component
const Header = ({title, channelNames, onClickScroll, onChange}) => {
   return (
      <div>
         <header className='header flex'>
            <p>&nbsp; </p>
            <h1 className="itemCenter">{title}</h1>
            <div style={{marginTop:'10px'}}>
               <Select channelNames={channelNames} onChange={onChange}  />
               <Button  text="Play" onClickScroll={onClickScroll} />
            </div>
         </header>
      </div>
   )
}

export default Header
