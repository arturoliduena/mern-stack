import axios from 'axios';

const API_URL = 'http://localhost:3000';

type Method = "post" | "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined

export default async (endpoint: string, method?: Method, body?: any, token?: string) => {
  return axios({
    // `headers` are custom headers to be sent
    headers: { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    // `url` is the server URL that will be used for the request
    url: endpoint,
    // `method` is the request method to be used when making the request
    method, // get default
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: API_URL,
    data: body
  }).then(response => {
    if (response.status === 200) {
      return response.data;
    }
  }).catch(err => console.error({ err }))
};


