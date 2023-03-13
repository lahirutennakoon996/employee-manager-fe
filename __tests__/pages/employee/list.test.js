import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import List from "@/pages/employee/list";

describe('Employee list', () => {
  const initialState = {
    employees: {
      allEmployees: [],
    }
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let component;

  beforeEach(() => {
    const componentRendered = render(<Provider store={store}><List /></Provider>);
    component = componentRendered.container;
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders the Add button', () => {
    const addEmployeeBtn = screen.getByRole('button', {
      name: /Add Employee/i,
    })

    expect(addEmployeeBtn).toBeInTheDocument();
    expect(addEmployeeBtn).not.toBeDisabled();
  })
})