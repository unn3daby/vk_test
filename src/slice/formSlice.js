import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tower: '',
    floor: '',
    meetingRoom: '',
    date: null,
    time: null,
    comment: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },

        resetForm(state) {
            return initialState;
        }
    }
})
const {actions, reducer} = formSlice;

export default reducer;

export const {updateForm, resetForm} = actions;