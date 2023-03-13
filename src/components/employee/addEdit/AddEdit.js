import { Form, Formik } from 'formik';
import cx from 'classnames';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { createEmployeeSchema } from "@/services/validation.service";
import InputField from "@/components/common/inputField/InputField";
import employeeConfig from "@/config/employee.config";
import {createEmployee} from "@/services/api/user.service";

export default function AddEdit({employee}) {
  const router = useRouter();
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '+94',
    gender: employeeConfig.gender.male,
  };

  const submitForm = async (formData) => {
    try {
      await createEmployee(formData);
      toast('Success', { hideProgressBar: true, autoClose: 2000, type: 'success' });

      // Go to 'all employees' page
      router.push('./list');
    }
    catch (error) {
      toast(`${error}`, { hideProgressBar: true, autoClose: 2000, type: 'error' });
    }
  }

  return (
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

          <button type="submit" className="btn btn-primary">Add</button>
        </Form>
      </Formik>
    </div>
  )
}
