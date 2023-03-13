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