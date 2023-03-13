import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router';
import {toast} from "react-toastify";

import {selectSingleEmployeeState, setSingleEmployee} from "../../../../store/slices/employeeSlice";
import BasicModal from "@/components/common/basicModal/BasicModal";
import {deleteEmployee} from "@/services/api/user.service";

export default function ActionButtons({selectedEmployee}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const employeeFromState = useSelector(selectSingleEmployeeState);

  const goToEdit = () => {
    // Set redux state
    dispatch(setSingleEmployee(selectedEmployee));

    // Go to 'edit employee' page
    router.push(`/employee/edit/${selectedEmployee._id}`);
  }

  const confirmDelete = async () => {
    try {
      await deleteEmployee(employeeFromState._id);
      toast('Success', { hideProgressBar: true, autoClose: 2000, type: 'success' });

      router.push('/employee/list');
    }
    catch (error) {
      toast(`${error}`, { hideProgressBar: true, autoClose: 2000, type: 'error' });
    }
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={goToEdit}>
        Edit
      </button> {' '}
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#basicModal"
              onClick={() => dispatch(setSingleEmployee(selectedEmployee))}>
        Delete
      </button>

      <BasicModal
        title="Are you sure?"
        body="This will delete the employee from the system."
        cancelText="Cancel"
        confirmText="Yes"
        confirmAction={confirmDelete}
      />
    </>
  )
}