import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import List from "@/pages/employee/list";
import mockStore from "../../../__mocks__/react-redux.mock";

describe('Employee list', () => {
  const initialState = {
    employees: {
      allEmployees: [],
    }
  };
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

  it('render the Toggle View button', async () => {
    const toggle = screen.getByRole('button', {
      name: /toggle view/i,
    });

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeDisabled();

    // Check for grid view
    const gridView = screen.getByTestId('grid-view');
    expect(gridView).toBeInTheDocument();

    // Check for table view after clicking 'toggle' button
    await userEvent.click(toggle);
    expect(gridView).not.toBeInTheDocument();
    const tableView = screen.getByTestId('table-view');
    expect(tableView).toBeInTheDocument();
  })
})