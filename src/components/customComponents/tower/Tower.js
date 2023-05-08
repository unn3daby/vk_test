import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const Tower = ({value, handleChange}) => {
    return (
        <div>
            <FormControl fullWidth required>
                <InputLabel>Башня</InputLabel>
                <Select
                    sx={{textAlign: 'left'}}
                    value={value}
                    label="Башня"
                    name = {'tower'}
                    onChange={(e) => handleChange(e)}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Tower;