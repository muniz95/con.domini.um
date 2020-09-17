export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response: Response = await fetch(request);
  let result;

  try {
    // may error if there is no body
    result = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  return result;
}

export async function get<T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<T> {
  return await http<T>(new Request(path, args));
};

export async function post<T>(
  path: string,
  body: any,
  args: RequestInit = { 
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  }
): Promise<T>  {
  return await http<T>(new Request(path, args));
};

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) }
): Promise<T> {
  return await http<T>(new Request(path, args));
};

export default {
  get,
  post,
  put,
}
