import {useDispatch} from "react-redux";
import { useRouter } from 'next/router';

import {setSingleEmployee} from "../../../../store/slices/employeeSlice";

export default function ActionButtons({selectedEmployee}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToEdit = (employee) => {
    // Set redux state
    dispatch(setSingleEmployee(employee));

    // Go to 'edit employee' page
    router.push(`/employee/edit/${employee._id}`);
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={() => goToEdit(selectedEmployee)}>
        Edit
      </button> {' '}
      <button type="button" className="btn btn-danger" >
        Delete
      </button>
    </>
  )
}