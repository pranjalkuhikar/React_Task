import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  formValue: { firstName: "", lastName: "" },
  data: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    changeInput: (state, action) => {
      const { name, value } = action.payload;
      state.formValue[name] = value;
    },
    submitData: (state) => {
      state.data.push({ ...state.formValue });
      state.formValue = { firstName: "", lastName: "" };
    },
    removeData: (state, action) => {
      state.data = state.data.filter((_, id) => id != action.payload);
    },
    updateData: (state, action) => {
      const { idx, updatedValue } = action.payload;
      if (idx >= 0 && idx < state.data.length) {
        state.data[idx] = { ...state.data[idx], ...updatedValue };
      }
    },
  },
});

export default userSlice.reducer;
export const {
  increment,
  decrement,
  changeInput,
  submitData,
  removeData,
  updateData,
} = userSlice.actions;
