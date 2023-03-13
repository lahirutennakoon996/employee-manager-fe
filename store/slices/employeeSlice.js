import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    allEmployees: [],
    singleEmployee: null,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setAllEmployees: (state, action) => {
      state.allEmployees = action.payload
    },
    setSingleEmployee: (state, action) => {
      state.singleEmployee = action.payload
    },
  },
  // Special reducer for hydrating the state (ensure that the state on the server side matches the client side)
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.employees,
      };
    },
  },
});

export const { setAllEmployees, setSingleEmployee } = employeeSlice.actions;
export const selectAllEmployeesState = (state) => state.employees.allEmployees;
export const selectSingleEmployeeState = (state) => state.employees.singleEmployee;
export default employeeSlice.reducer;