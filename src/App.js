import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
function App(   ) {
     
    const [ value, setValue] = useState(""); 
  

   const calc =(obj)=>{
    //  console.log('i')

    // if(value.length >= 10 ){
    //   setValue( "" )
    //   return 0;
    // }

    if(obj === "="){
      try{
        var result = String(eval(value))
      }
      catch{
           toast("You have Entered something wrong!!", { type: "error" })
           return;
      }
        
         if(result.length <= 15 ){
          setValue(  result) 
        }
        else{
          toast("Result is out of scope ", { type: "error"} )
        }
    }
    else if( obj === 'back'){
      try{
        var result = value.slice(0, value.length-1 );
      }
      catch{
           toast("You have Entered something wrong!!", { type: "error" })
           return;
      }
      
     if(result.length <= 15 ){
      setValue(  result) 
    }
    else{
      toast("Result is out of scope ", { type: "error"} )
    }

    }
    else if(obj === 'cut'){
      try{
        var  result = "";
      }
      catch{
           toast("You have Entered something wrong!!", { type: "error" })
           return;
      }
       
        if(result.length <= 15 ){
          setValue(  result) 
        }
        else{
          toast("Result is out of scope ", { type: "error"} )
        }
    }
    else if( obj === "**"){
      try{
        var result =value + "**" 
      }
      catch{
           toast("You have Entered something wrong!!", { type: "error" })
           return;
      }
      
      if(result.length <= 15 ){
        setValue(  result) 
      }
      else{
        toast("Result is out of scope ", { type: "error"} )
      }
        
    }
    else{
      try{
        var result = value + obj
      }
      catch{
           toast("You have Entered something wrong!!", { type: "error" })
           return;
      }
       
      if(result.length <= 15 ){
        setValue(  result)
      }
      else{
        toast("Result is out of scope ", { type: "error"} )
      }
    }
      
   }

  return (
  <div className="main">
  <ToastContainer />
    <div className="Container"> 
    <div className="d-flex flex-column m-3" > 
        <div className="display">
            <h1>{ value }</h1>
        </div>
    </div>
   
   <div className="subContainer">
        <div className="d-flex justify-content-between m-3" > 
            
              <button  onClick={ ()=> calc('7') }>7</button>
              <button onClick={ ()=> calc('8') }>8</button>
              <button onClick={ ()=> calc('9') }>9</button>
              <button onClick={ ()=> calc('**') }>^</button>
              <button onClick={ ()=> calc('back') }> -> </button>
        </div>
        <div className="d-flex justify-content-between m-3" > 
            
              <button onClick={ ()=> calc('4') }>4</button>
              <button onClick={ ()=> calc('5') }>5</button>
              <button onClick={ ()=> calc('6') }>6</button>
              <button onClick={ ()=> calc('*') }>*</button>
              <button onClick={ ()=> calc('/') }>/</button>
        </div>
      </div>  
        <div className='container ml-3'>
        <div className='row'>
          <div className="col-lg-9" style={{ padding: "0px" }}>
              <div className="d-flex flex-wrap" >
                <button onClick={ ()=> calc('1') } className="mb-3" style={{ marginRight :"8px"}} >1</button>
                <button onClick={ ()=> calc('2') } style={{ marginRight :"8px"}}>2</button>
                <button onClick={ ()=> calc('3') } style={{ marginRight :"8px"}} >3</button>
                <button onClick={ ()=> calc('-') } >-</button>
                <button onClick={ ()=> calc('cut') } style={{ marginRight :"8px"}} >C</button>
              <button onClick={ ()=> calc('0') } style={{ marginRight :"8px"}}>0</button>
              <button onClick={ ()=> calc('.') } style={{ marginRight :"8px"}}>.</button> 
              <button onClick={ ()=> calc('+') } >+</button> 
              </div>
          </div>
          <div className="col-lg-3" style={{ padding: "0px" }}>
          <div className="d-flex justify-content-between" >
                <button  onClick={ ()=> calc('=') } style={{ height :"120px"}} > = </button>
              </div>
          </div>
        </div>
        </div>
  </div>
  </div>   
   
  );
}

export default App;
