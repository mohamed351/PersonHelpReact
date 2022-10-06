import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

//fake userName and Password


function Root() {
  const [getUser , setUser] = useState({userName: "" , password: ""});
  const [isLogin,setIsLogin] = useState(false);
  const onInputChange =(input)=>{
    setUser((state)=>{
        return {
            ...state,
            [input.name]:input.value
        }
    })
  }

  const onFormSubmit =(e)=>{
    e.preventDefault();
   if(getUser.userName === "admin" && getUser.password === "hell12" ){
    setIsLogin(true);
   }
   else{
    alert("The userName or password is wrong");
   }
  }
  return (
        <>
        <div className='container'>
          {
            !isLogin?
            <div style={{display:"flex",justifyContent:"center",height:"100vh", alignItems:"center" , width:"100%"}}>
                <div style={{width:"40%"}}>
                  <h2 className='text-center'>Login</h2>
                    <form onSubmit={onFormSubmit}>
                      <div className='form-group mt-2'>
                    <input placeholder='userName' name='userName' required className='form-control' onChange={(e) =>onInputChange(e.target)}  />
                    </div>  
                    <div className='form-group mt-2'>
                    <input type="password" name='password' required placeholder='Password' className='form-control'   onChange={(e) =>onInputChange(e.target)} />
                    </div>

                    <button className='btn btn-success mt-2'>Login</button>


                    </form>
                </div>
            </div>:
            <div>
              <div>
              <Link to="/Employee"> Employees</Link>
              </div>
              <div>
              <Link to="/Department">Departments or Jobs</Link>
              </div>
              <div>
              <Link to="/Management">Mangments</Link>
              </div>
              
              </div>
}
        </div>
        
        </>
  )
}

export default Root