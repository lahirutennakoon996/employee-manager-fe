import { get, postOrPut, remove } from './api.service';
import sortConfig from "@/config/sort.config";
import config from "@/config/config";

const employeeUrl = 'employee';

/**
 * Get all employees
 * @returns {Promise<any>}
 */
export const getEmployees = async () => {
  return get(`${employeeUrl}?limit=0&page=1&column=-1&order=${sortConfig.sortingOrder.descending}&search=`);
}

/**
 * Create new employee
 * @param body
 * @returns {Promise<any>}
 */
export const createEmployee = async (body) => {
  return postOrPut(`${employeeUrl}`, config.httpMethod.post, body);
}

/**
 * Update employee
 * @param id
 * @param body
 * @returns {Promise<any>}
 */
export const updateEmployee = async (id, body) => {
  return postOrPut(`${employeeUrl}/${id}`, config.httpMethod.put, body);
}

/**
 * Delete employee
 * @param id
 * @returns {Promise<void>}
 */
export const deleteEmployee = async (id) => {
  return remove(`${employeeUrl}/${id}`);
}