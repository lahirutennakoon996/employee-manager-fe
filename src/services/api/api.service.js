import config from "@/config/config";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

/**
 * GET request to API
 * @param url
 * @returns {Promise<void>}
 */
export const get = async (url) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: config.httpMethod.get,
  });

  return handleResponse(response);
}

/**
 * POST/PUT request to API
 * @param url
 * @param method
 * @param body
 * @returns {Promise<void>}
 */
export const postOrPut = async (url, method, body) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  return handleResponse(response);
}

/**
 * DELETE request to API
 * @param url
 * @returns {Promise<any>}
 */
export const remove = async (url) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: config.httpMethod.delete,
  });

  return handleResponse(response);
}

/**
 * Handle response from API
 * @param response
 * @returns {Promise<{status}|*>}
 */
const handleResponse = async (response) => {
  const data = await response.json();

  if (data.status) {
    return data;
  }

  throw new Error(data.msg.replace('Error:', ''));
}