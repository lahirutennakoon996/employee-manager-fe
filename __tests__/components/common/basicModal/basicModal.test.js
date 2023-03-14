import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import BasicModal from "@/components/common/basicModal/BasicModal";
import mockStore from "../../../../__mocks__/react-redux.mock";

describe('Basic modal', () => {
  const modalData = {
    title: "Are you sure?",
    body: "This will delete the employee from the system.",
    cancelText: "Cancel",
    confirmText: "Yes",
  };

  const initialState = {
    employees: {
      allEmployees: [],
      singleEmployee: null,
    },
  };

  const store = mockStore(initialState);
  let component;

  beforeEach(() => {
    const componentRendered = render(<Provider store={store}>
      <BasicModal
        title={modalData.title}
        body={modalData.body}
        cancelText={modalData.cancelText}
        confirmText={modalData.confirmText}
        confirmAction={jest.fn()}
      />
    </Provider>);
    component = componentRendered.container;
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('render the title', () => {
    const heading = screen.getByRole('heading', {
      name: modalData.title,
    });
    expect(heading).toBeInTheDocument();
  })

  it('render the close button', () => {
    const closeBtn = screen.getByRole('button', {
      name: /close/i,
    });
    expect(closeBtn).toBeInTheDocument();
    expect(closeBtn).not.toBeDisabled();
  })

  it('render the confirm button', () => {
    const confirmBtn = screen.getByRole('button', {
      name: modalData.confirmText,
    });
    expect(confirmBtn).toBeInTheDocument();
    expect(confirmBtn).not.toBeDisabled();
  })

  it('render the cancel button', () => {
    const cancelBtn = screen.getByRole('button', {
      name: modalData.cancelText,
    });
    expect(cancelBtn).toBeInTheDocument();
    expect(cancelBtn).not.toBeDisabled();
  })
})