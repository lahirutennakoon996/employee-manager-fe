import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: ["David-Omotayo", "Emmanuel-Omotayo"]
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload
    },
    setSingleEmployee: (state, action) => {
      state.singleEmployee = action.payload
    },
  }
});

export const { setEmployees, setSingleEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;