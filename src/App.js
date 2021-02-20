import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Alert,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect} from "react-redux";
 import { loginSuccess } from './Toolkit/index'


const MyApp = ({ token, login}  ) => {

   const [ message, setMessage  ] = useState('')
  console.log( 'token', token);
  console.log(login);
  
  return (
    <div className='container-fluid'>
    <h1 class='text-center p-3'>  initial Token :  <strong>{token}</strong></h1>
      <div class='row'>
        <div class='col'>
      <input type='text' class='form-control' placeholder='Enter input here' value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div>
          <button class='btn btn-success text-white h-100' onClick={() => { login(message);setMessage('')  }   } >Add</button>
        </div>
      </div>
      
    </div>
  )
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
        token : state.auth.token  
     }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch', dispatch);
      return {  login: (message) =>  dispatch(loginSuccess(message))  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
