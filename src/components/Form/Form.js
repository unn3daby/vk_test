import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
import { DateField , TimeField } from '@mui/x-date-pickers';
import Button from '@mui/material/Button';
import {Stack} from '@mui/material';

import './Form.scss';

const Form = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };



    return (
            <>
            <form action="" className="form">
                <Box sx={{width: '70%'}} bgcolor={'#'}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }} justifyContent={'center'} alignItems={'center'}>
                        <Grid justifyContent={'center'} alignItems={'center'} textAlign={'center'} fontSize={{md:'20px', sm: '15px', xs: '10px'}} m={'20px'}>
                            <h1>Форма бронирования переговорной</h1>
                        </Grid>
                        <Grid xs={12} md={6} sm={10}>
                            <FormControl fullWidth>
                                <InputLabel>Башня</InputLabel>
                                <Select
                                    sx={{textAlign: 'left'}}
                                    value={age}
                                    label="Башня"
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={'A'}>A</MenuItem>
                                    <MenuItem value={'B'}>B</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={6} sm={10} mt={{md: 0, sm: 2, xs: 2}}>
                            <FormControl fullWidth>
                                <Autocomplete
                                noOptionsText="Не найдено"
                                disablePortal
                                options={[{label: 'A', id: 'A'}, {label: 'B', id: 'B'}]}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Этаж" />}
                                />
                            </FormControl>
                        </Grid>

                        <Grid xs={12} md={12} sm={10} mt={{md:2, sm:2,  xs: 2}}>
                            <FormControl fullWidth>
                                <Autocomplete
                                noOptionsText="Не найдено"
                                disablePortal
                                options={[{label: 1, id: 1}, {label: 2, id: 2}]}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="Переговорная" />}
                                />
                            </FormControl>
                        </Grid>
                        <Grid xs={12}
                            md={12} sm={10} mt={2}>
                            <DateField 
                            fullWidth
                            label="Введите дату"/>
                        </Grid>

                        <Grid 
                            xs={12} md={12} sm={10} mt={2}>
                            <TimeField
                            fullWidth
                            label={"Введите время"}
                            ampm={false}/>
                        </Grid>
                        <Grid xs={12} md={12} sm={10} mt={2}>
                            <TextField
                                width={'100%'}
                                multiline
                                rows={4.5}
                                fullWidth 
                                label="Комментарий"
                                variant="outlined"
                                />
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} sm={10} mt={2}>
                        <Stack direction={{ xs: 'column', md: 'row', sm: 'row' }} spacing={2} justifyContent={'space-evenly'} >
                            <Button sx={{height: {md: '50px', xs: '50px'}}} variant="contained">Отправить</Button>
                            <Button sx={{height: {md: '50px', xs: '50px'}}} color="error" variant="contained">Отчистить</Button>
                        </Stack>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default Form;