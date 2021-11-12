import React from "react";
import { Dropdown } from "semantic-ui-react";

const Select = ({ channelNames, onChange }) => {
  
  const handleDropDownSelect = (event, data) => 
  {
    let channel = channelNames.filter(channel => 
    {
        return channel.value == data.value
    });

    if(channel.length > 0)
      onChange(channel[0].value);
  };

  return (
    <>
      <Dropdown
        placeholder="Select a radio channel"
        clearable
        options={channelNames}
        selection
        onChange = {handleDropDownSelect}
      />
    </>
  );
};

export default Select;
