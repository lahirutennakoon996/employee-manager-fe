import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from "next/link";

import { createEmployeeSchema } from "@/services/validation.service";
import InputField from "@/components/common/inputField/InputField";
import employeeConfig from "@/config/employee.config";
import {createEmployee, updateEmployee} from "@/services/api/user.service";
import {useSelector} from "react-redux";
import {
  selectSingleEmployeeState,
  setSingleEmployee
} from "../../../../store/slices/employeeSlice";

/**
 * Add / Edit employee
 * @returns {JSX.Element}
 * @constructor
 */
export default function AddEdit() {
  const router = useRouter();
  const employee = useSelector(selectSingleEmployeeState);

  const initialValues = {
    first_name: employee.first_name || '',
    last_name: employee.last_name || '',
    email: employee.email || '',
    phone: employee.phone || '+94',
    gender: employee.gender || employeeConfig.gender.male,
  };

  const submitForm = async (formData) => {
    try {
      // If editing
      if (employee) {
        await updateEmployee(employee._id, formData);
      }
      // Else add new employee
      else {
        await createEmployee(formData);
      }

      toast('Success', { hideProgressBar: true, autoClose: 2000, type: 'success' });

      // Go to 'all employees' page
      router.push('/employee/list');
    }
    catch (error) {
      toast(`${error}`, { hideProgressBar: true, autoClose: 2000, type: 'error' });
    }
  }

  return (
    <div className='container'>
      <div className='row text-end mb-5 mt-2'>
        <Link href='/employee/list'>List View</Link>
      </div>

      <div className='row text-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={createEmployeeSchema}
          enableReinitialize
        >
          <Form>
            <InputField labelName='First Name' identifier='first_name' />
            <InputField labelName='Last Name' identifier='last_name' />
            <InputField labelName='Email' identifier='email' />
            <InputField labelName='Phone' identifier='phone' />
            <InputField labelName='Gender' identifier='gender' isDropdown
                        dropdownOptions={Object.values(employeeConfig.gender)} />

            <button type="submit" className="btn btn-primary">{employee ? 'Save' : 'Add'}</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
