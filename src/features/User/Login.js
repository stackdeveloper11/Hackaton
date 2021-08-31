import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './UserSlice';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import $ from "jquery";
import Iframe from './Iframe.js';


const Login = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
 
    var ibbMAP = new SehirHaritasiAPI({mapFrame:"mapFrame",apiKey:"..."}, function () {   
      ibbMAP.Map.GetLocation(function (lon, lat) {
       console.info(lon+" "+lat);                   
     });
 });
 
    return () => {
      dispatch(clearState());
    
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }
  }, [isError, isSuccess]);

  return (
<Fragment>
<div className="container">
      <div className="row">
        <Iframe source={"http://sehirharitasi.ibb.gov.tr"} />


  
 
      <form onSubmit={handleSubmit(onSubmit)} method="POST">       
          <div className="col-md-6 offset-md-3 col-xs-12 card" style={{ marginTop: "100px", background: "white", padding: "70px" }}>
            <div style={{ borderLeft: "4px solid #70bbfd", paddingLeft: "15px", width: "100%",textAlign:"left" }}>
              <div style={{ fontSize: "24px" }}>Welcome to EasyDev</div>
              <small>Start your business easily</small>
            </div>
            <div className="form-group" style={{ marginTop: "30px",textAlign:"left" }}>
              <small style={{ width: "100%" }}>Email</small>
              <div className="input-group mb-3 input-group-sm" style={{ marginTop: "10px" }}>
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ borderRadius: "0" }}><i className="las la-user"></i></span>
                </div>
                <input id="email" name="email" type="email" autoComplete="email" ref={register({ pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,})}
                    required className="form-control" />
              </div>
            </div>
            <div className="form-group" style={{textAlign:"left"}}>
              <small style={{ width: "100%" }}>Password</small>
              <div className="input-group mb-3 input-group-sm" style={{ marginTop: "10px" }}>
                <div className="input-group-prepend">
                  <span className="input-group-text" style={{ borderRadius: "0" }}><i className="las la-key"></i></span>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    ref={register({ required: true })}
                    autoComplete="current-password"
                    required
                    className="form-control"
                  />
                <div className="input-group-append">
                  <span className="input-group-text" style={{ borderRadius: "0" }}><i className="las la-user-secret"></i></span>
                </div>
              </div>
            </div>
            <div style={{textAlign: "left"}}>

            </div>
         
            <button type="submit" className="btn btn-primary btn-block"  style={{marginTop:"15px"}}>
                  {isFetching ? (
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
                  Sign in
                </button>
            <Link className="btn btn-outline-dark" to={'/Signup'} style={{ marginTop: "15px" }}>Create Account</Link>
          </div>
        </form>
      </div>
    </div> 
    </Fragment>
  );
};
export default Login;