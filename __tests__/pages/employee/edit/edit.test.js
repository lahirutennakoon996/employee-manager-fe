import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Edit from "@/pages/employee/edit/[id]";
import employeeConfig from "@/config/employee.config";
import mockStore from "../../../../__mocks__/react-redux.mock";

describe('Edit Employee Form', () => {
  const employee = {
    _id: 12,
    first_name: "Adonis",
    last_name: "Schuppe",
    email: "Johann.Orn52@hotmail.com",
    phone: "+94771277618",
    gender: "F",
  };

  const initialState = {
    employees: {
      allEmployees: [],
      singleEmployee: employee,
    },
  };

  const store = mockStore(initialState);
  let component;

  beforeEach(() => {
    const componentRendered = render(<Provider store={store}><Edit /></Provider>);
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
    expect(firstNameInput).toHaveValue(employee.first_name);
  })

  it('render the last name input', () => {
    const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name/,
    });
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).not.toBeDisabled();
    expect(lastNameInput).toHaveValue(employee.last_name);
  })

  it('render the email input', () => {
    const emailInput = screen.getByRole('textbox', {
      name: /Email/,
    });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).not.toBeDisabled();
    expect(emailInput).toHaveValue(employee.email);
  })

  it('render the phone input', () => {
    const phoneInput = screen.getByRole('textbox', {
      name: /Phone/,
    });
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).not.toBeDisabled();
    expect(phoneInput).toHaveValue(employee.phone)
  })

  it('render the gender select', () => {
    const genders = Object.values(employeeConfig.gender);

    const genderInput = screen.getByRole('combobox', {
      name: /Gender/,
    });
    expect(genderInput).toBeInTheDocument();
    expect(genderInput).not.toBeDisabled();

    // Find index of selected option
    const selectOptionIndex = genders.indexOf(employee.gender);
    expect(genderInput[selectOptionIndex].selected).toBeTruthy();

    // Test for dropdown options
    genders.forEach((genderVal) => {
      const option = screen.getByRole('option', {
        name: genderVal
      });
      expect(option).toBeInTheDocument();
      expect(option).not.toBeDisabled();
    })
  })

  it('render the save button', async () => {
    const addBtn = screen.getByRole('button', {
      name: /save/i,
    });

    expect(addBtn).toBeInTheDocument();
    expect(addBtn).not.toBeDisabled();
  })
})