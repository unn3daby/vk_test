import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, TextField, Stack, Button } from '@mui/material';
import { DateField , TimeField } from '@mui/x-date-pickers';
import MyDropdown from '../customComponents/dropdown/MyDropdown';
import Tower from '../customComponents/tower/Tower';
import { submitForm, updateField } from '../../actions/formActions';
import './Form.scss';
import createDateObject from '../../api/createDateObject';
import store from '../../store';
import { resetForm } from '../../slice/formSlice';



const Form = () => {

    const [dateAndTimestate, setDateAndTimestate] = useState({
        date: null,
        time: null
    });

    const {tower, floor, meetingRoom, comment} = useSelector(state => state.form);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
            if (e === undefined) return
            const { name, value } = e.target;
            dispatch(updateField(name, value));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(dispatch, store.getState));
        setDateAndTimestate({
            date: null,
            time: null
        });
    };

    const floors = useMemo(() => Array.from({ length: 25 }, (_, i) => i + 3).map(item => ({label: `${item}`, id: `floor-${item}`,  value: item})), []);
    const meetings = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1).map(item => ({label: `${item}`, id: `meeting-${item}`})), []);

    return (
        <>
            <form action="" className="form" onSubmit={(e) => {handleSubmit(e)}}>
                <Box sx={{width: '70%'}} bgcolor={'#'}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }} justifyContent={'center'} alignItems={'center'}>
                        <Grid justifyContent={'center'} alignItems={'center'} textAlign={'center'} fontSize={{md:'20px', sm: '15px', xs: '10px'}} m={'20px'}>
                            <h1>Форма бронирования переговорной</h1>
                        </Grid>
                        <Grid xs={12} md={6} sm={10}>
                            <Tower required = {true} value={tower} handleChange={handleInputChange}/>
                        </Grid>
                        <Grid xs={12} md={6} sm={10} mt={{md: 0, sm: 2, xs: 2}}>
                            <MyDropdown
                                required = {true}
                                name = 'floor'
                                value = {floor}
                                handleChange={handleInputChange}
                                options={floors}
                                label = 'Этаж'
                                noOptionsText="Не найдено"
                                />
                        </Grid>

                        <Grid xs={12} md={12} sm={10} mt={{md:2, sm:2,  xs: 2}}>
                            <MyDropdown 
                                required = {true}
                                name = 'meetingRoom'
                                value = {meetingRoom}
                                options={meetings}
                                handleChange={handleInputChange}
                                label = 'Переговорная'
                                noOptionsText="Не найдено"
                                />
                        </Grid>
                        <Grid xs={12}
                            md={12} sm={10} mt={2}>
                            <DateField
                            required
                            value={dateAndTimestate.date}
                            onChange={(date) => {
                                setDateAndTimestate((state) => ({
                                    ...state,
                                    date: date
                                }))
                                handleInputChange(createDateObject(date));
                            }}
                            fullWidth
                            label="Введите дату"/>
                        </Grid>

                        <Grid 
                            xs={12} md={12} sm={10} mt={2}>
                            <TimeField
                            required
                            value = {dateAndTimestate.time}
                            onChange={(time) => {
                                setDateAndTimestate((state) => ({
                                    ...state,
                                    time: time
                                }))
                                handleInputChange(createDateObject(time, 'time'));
                            }}
                            fullWidth
                            label={"Введите время"}
                            ampm={false}/>
                        </Grid>
                        <Grid xs={12} md={12} sm={10} mt={2}>
                            <TextField
                                value = {comment}
                                name = 'comment'
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                                width={'100%'}
                                multiline
                                rows={4.5}
                                fullWidth 
                                label="Комментарий"
                                variant="outlined"
                                autoComplete="off"
                                />
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12} sm={10} mt={2}>
                        <Stack direction={{ xs: 'column', md: 'row', sm: 'row' }} spacing={2} justifyContent={'space-evenly'} >
                            <Button type="submit" sx={{height: {md: '50px', xs: '50px'}}} variant="contained">Отправить</Button>
                            <Button onClick = {() => dispatch(resetForm())} sx={{height: {md: '50px', xs: '50px'}}} color="error" variant="contained">Отчистить</Button>
                        </Stack>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default Form;