import API from '../API/Api';
import { setLoading , setError } from '../Reducer';
let pendingRequest = 0;

export async function handleRequest(action) {
  
  const { method, url, body, handleSuccess , setLoader , setError } = action;
  pendingRequest += 1;
  if (pendingRequest === 1) setLoader(true) ;
  setError(null);
  try {
    const data =await API( method, url, body);
    handleSuccess(data);
  } catch (error) {
    const errorObject = error.response
      ? {
        method,
        url,
        status: error.response.data.status,
        error: error.response.data.error,
        message:  error.response.data.message,
        timestamp:  error.response.data.timestamp,
        path:  error.response.data.path,
      }
      : { method, url, message: error.message };
      setError(errorObject);
  }
  pendingRequest -= 1;
  if (pendingRequest === 0) setLoader(false) ;
}

export const errorHandler =(dispatch)=> {
  return{
    setLoader:(data)=>{ dispatch(setLoading(data)); },
    setError:(data)=>{ dispatch(setError(data)); }
  }
}