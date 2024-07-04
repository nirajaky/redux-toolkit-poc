
import { handleRequest , errorHandler } from '../../../../Common/Redux/API';
import { setJobRoles, setProducts } from '..';
import {GET, POST} from '../../../../Common/Constants/APIMethods'
import { FETCH_JOB_ROLE_ENDPOINT, FETCH_PRODUCTS_ENDPOINT } from '../../../../Common/Constants/APIEndpoint';
  
// asynchronous action creator using Redux Thunk
  export const fetchProductsAsync = () => async (dispatch) => {
    await handleRequest({
      method: GET,
      url: FETCH_PRODUCTS_ENDPOINT,
      handleSuccess: (data)=>{
        dispatch(setProducts(data.products));
      },
      ...errorHandler(dispatch)
    });
  };
  
  // asynchronous action creator using Redux Thunk
  export const SearchJobRoleAsync = (data) => async (dispatch) => {
    await handleRequest({
      method: POST,
      url: FETCH_JOB_ROLE_ENDPOINT,
      body: data,
      handleSuccess: (response)=>{
        dispatch(setJobRoles(response.data));
      },
      ...errorHandler(dispatch)
    });
  };
  