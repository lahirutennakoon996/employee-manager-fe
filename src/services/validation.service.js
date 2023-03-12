import * as Yup from 'yup';

import employeeConfig from "@/config/employee.config";

const nameSchema = Yup.string()
  .min(6)
  .max(10)
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
  .required();

export const createEmployeeSchema = Yup.object({
  first_name: nameSchema,
  last_name: nameSchema,
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string()
    .matches(/(\+94)[0-9]{9}/, 'Invalid phone number')
    .length(12)
    .required(),
  gender: Yup.string()
    .oneOf(Object.values(employeeConfig.gender))
    .required(),
});