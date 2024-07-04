
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync , SearchJobRoleAsync } from './Reducer/Api';
import { setIncreaseCount ,setDecreaseCount } from './Reducer';
import { ZEAM_JOB_ROLE } from '../../Common/Constants/ReportName';

function LandingPage() {
    const products = useSelector((state) => state.landingPage.products);
    const jobRoles = useSelector((state) => state.landingPage.jobRoles);
    const count = useSelector((state) => state.landingPage.count);
    const dispatch = useDispatch();
    const searchJobRole = ()=>{
      dispatch(SearchJobRoleAsync({
        REPORT_NAME: ZEAM_JOB_ROLE,
        currentPageSet: 1,
        searchCriteriaReq: {
          JOB_ROLE: '',
          DESCRIPTION: '',
          SCRUM_JOBROLE: '',
        },
      }))
    }


  
    return (
        <div>
        <h1>POC of redux-toolkit</h1>
        {count}
        <br></br>
        <button onClick={()=>{dispatch(setIncreaseCount(1))}} style={{marginRight:10}} >Increase By Count 1</button>
        <button onClick={()=>{dispatch(setDecreaseCount())}} >Decrease By Count 1</button>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={()=>{dispatch(fetchProductsAsync())}} style={{marginRight:10}} >call product api</button>
        <button onClick={()=>{searchJobRole()}} >call jobrole api</button>
        <br></br>

          <div>
            <h1>job roles</h1>
            {jobRoles.map((item) => (
              <div key={item.jobRole}>
                <li >{item.jobRole}</li>
              </div>
            ))}
          </div>

          <div>
            <h1>products</h1>
            {products.map((product) => (
              <div key={product.id}>
                <li >{product.title}</li>
              </div>
            ))}
          </div>
        
      </div>
    );
}

export default LandingPage;
