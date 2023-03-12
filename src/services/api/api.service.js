const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const get = async (url) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: 'GET'
  });

  return response.json();
}

export const postOrPut = async (url, method, body) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  return response.json();
}

export const remove = async (url) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method: 'DELETE',
  });

  return response.json();
}
