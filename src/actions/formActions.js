import { updateForm, resetForm } from "../slice/formSlice";

export const updateField = (key, value) => {
    return updateForm({ key, value });
  };
  
  export const submitForm = () => {
    return (dispatch, getState) => {
      const { tower, time, date, floor, meetingRoom, comment } = getState().form;
      console.log('Form submitted:', { tower, time, date, floor, meetingRoom, comment });
      dispatch(resetForm());
    };
  };