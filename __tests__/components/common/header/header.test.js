import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Header from "@/components/common/header/Header";
import mockStore from "../../../../__mocks__/react-redux.mock";

describe('Header', () => {
  const initialState = {
    employees: {
      allEmployees: [],
      singleEmployee: null,
    },
  };

  const store = mockStore(initialState);
  let component;

  beforeEach(() => {
    const componentRendered = render(<Provider store={store}><Header /></Provider>);
    component = componentRendered.container;
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('render the heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Employee Manager/i,
    });
    expect(heading).toBeInTheDocument();
  })
})