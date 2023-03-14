import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Add from "@/pages/employee/add";
import employeeConfig from "@/config/employee.config";
import mockStore from "../../../__mocks__/react-redux.mock";

describe('Add Employee Form', () => {
  const initialState = {
    employees: {
      allEmployees: [],
    }
  };

  const store = mockStore(initialState);
  let component;

  beforeEach(() => {
    const componentRendered = render(<Provider store={store}><Add /></Provider>);
    component = componentRendered.container;
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('render the first name input', () => {
    const firstNameInput = screen.getByRole('textbox', {
      name: /First Name/,
    });
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).not.toBeDisabled();
    expect(firstNameInput).toHaveValue('');
  })

  it('render the last name input', () => {
    const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name/,
    });
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).not.toBeDisabled();
    expect(lastNameInput).toHaveValue('');
  })

  it('render the email input', () => {
    const emailInput = screen.getByRole('textbox', {
      name: /Email/,
    });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).not.toBeDisabled();
    expect(emailInput).toHaveValue('');
  })

  it('render the phone input', () => {
    const phoneInput = screen.getByRole('textbox', {
      name: /Phone/,
    });
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).not.toBeDisabled();
    expect(phoneInput).toHaveValue('+94')
  })

  it('render the gender select', () => {
    const genderInput = screen.getByRole('combobox', {
      name: /Gender/,
    });
    expect(genderInput).toBeInTheDocument();
    expect(genderInput).not.toBeDisabled();

    // Test for dropdown options
    Object.values(employeeConfig.gender).forEach((genderVal) => {
      const option = screen.getByRole('option', {
        name: genderVal
      });
      expect(option).toBeInTheDocument();
      expect(option).not.toBeDisabled();
    })
  })

  it('render the add button', async () => {
    const addBtn = screen.getByRole('button', {
      name: /add/i,
    });

    expect(addBtn).toBeInTheDocument();
    expect(addBtn).not.toBeDisabled();
  })
})