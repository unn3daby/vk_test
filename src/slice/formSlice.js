import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tower: ['A', 'B'],
    floor: {},
    meetingRoom: {},
    date: '',
    comment: '',
}

const formSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        getData: (state, action) => {
            
        },
        postData: (state, action) => {
            
        }
    }

})
const {actions, reducer} = formSlice;

export default reducer;