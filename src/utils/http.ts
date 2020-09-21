export async function full(request: RequestInfo): Promise<Response> {
  return await fetch(request);
}

export async function http<T>(request: RequestInfo): Promise<T> {
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
}

export async function post<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: "post",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  }
): Promise<T> {
  return await http<T>(new Request(path, args));
}

export async function fullPost(
  path: string,
  body: any,
  args: RequestInit = {
    method: "post",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  }
): Promise<Response> {
  return await full(new Request(path, args));
}

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: "put",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  }
): Promise<T> {
  return await http<T>(new Request(path, args));
}

export default {
  get,
  post,
  fullPost,
  put,
};
