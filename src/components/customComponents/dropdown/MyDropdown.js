import React from 'react';
import {Autocomplete, TextField } from '@mui/material';
const MyDropdown = ({value, handleChange, noOptionsText, options, label, name}) => {
    const targetOption = (event, selectedOption) => {
        if (selectedOption) {
          return {target: {
                name: name, 
                value: `${selectedOption.label}`
          }};
        }
      };

    return (
        <div>
            <Autocomplete required
            fullWidth
            value = {value}
            onChange = {(e, selectedOption) => handleChange(targetOption(e, selectedOption)) }
            noOptionsText={noOptionsText}
            disablePortal
            options={options}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} required label={label}/>}
            />
        </div>
    );
};

export default MyDropdown;