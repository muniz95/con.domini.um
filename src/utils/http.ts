import { instance as store } from '../store';

export async function full(request: RequestInfo): Promise<Response> {
  return await fetch(request);
}

export async function http<T>(request: RequestInfo): Promise<T | any | null> {
  const response: Response = await fetch(request);
  let result;

  // eslint-disable-next-line no-useless-catch
  try {
    // may error if there is no body
    switch (response.status) {
      case 200:
        result = await response.json();
        return result;
      case 401:
        store.logout();
        break;
      default:
        break;
    }
  } catch (ex) {
    throw ex;
  }

  return null;
}

export async function get<T>(
  path: string,
  token?: string,
  args: RequestInit = {
    method: "get",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
      "Authorization": token || '',
    },
  }
): Promise<T | null> {
  return await http<T>(new Request(path, args));
}

export async function post<T>(
  path: string,
  body: any,
  token?: string,
  args: RequestInit = {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
      "Authorization": token || '',
    },
    body: JSON.stringify(body),
  }
): Promise<T | null> {
  return await http<T>(new Request(path, args));
}

export async function remove(
  path: string,
  id: any,
  token?: string,
  args: RequestInit = {
    method: "DELETE",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
      "Authorization": token || '',
    },
  }
): Promise<void> {
  return await http(new Request(`${path}/${id}`, args));
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
  token?: string,
  args: RequestInit = {
    method: "put",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Expose-Headers": "Authorization",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  }
): Promise<T | null> {
  return await http<T>(new Request(`${path}/${body.id}`, args));
}

export default {
  get,
  post,
  remove,
  fullPost,
  put,
};
