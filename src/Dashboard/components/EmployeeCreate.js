import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EmployeeCreate() {
    const [listOfDepartment,setDepartmentList] = useState([]);
    const [listOfMangment,setManagementList] = useState([]); 
    const [getEmployee, setEmployee]= useState({
        name:"",
        icl:"",
        managment:"",
        job:"",
        salary:"",
        rate:"",
        id:0
    });
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            axios.get(`https://catgo-bf777-default-rtdb.firebaseio.com/employees/${id}.json`).then(a=>{
            
                setEmployee((state)=>{
                    return {
                        id,
                        name: a.data.name,
                        icl :a.data.icl,
                        job:a.data.job,
                        salary:a.data.salary,
                        rate:a.data.rate,
                        managment:a.data.managment

                    }
                 
                })
            })
        }


        axios.get("https://catgo-bf777-default-rtdb.firebaseio.com/management.json").then(a=>{
            let array = [];
            for(var item in a.data){
              array.push({id:item,name:a.data[item].name})
            }
           
             setManagementList(array);
            
           });


           axios.get("https://catgo-bf777-default-rtdb.firebaseio.com/department.json").then(a=>{
            let array = [];
            for(var item in a.data){
              array.push({id:item,name:a.data[item].name})
            }
           
            setDepartmentList(array);
            
           });




    },[])
   const onDataSubmit =(e)=>{
    e.preventDefault();
    if(!id){
            //create
          
            axios.post("https://catgo-bf777-default-rtdb.firebaseio.com/employees.json",{
               name:getEmployee.name,
               icl:getEmployee.icl,
               managment:getEmployee.managment,
               job: getEmployee.job,
               salary:  +getEmployee.salary,
               rate:+getEmployee.rate


            }).then(a=>{
                if(a.status === 200){
                    navigate("/Employee")
                }
            })
    }
    else{
        //update

        axios.put(`https://catgo-bf777-default-rtdb.firebaseio.com/employees/${id}.json`,{
            name:getEmployee.name,
            icl:getEmployee.icl,
            managment:getEmployee.managment,
            job: getEmployee.job,
            salary:  +getEmployee.salary,
            rate:+getEmployee.rate
         }).then(a=>{
             if(a.status === 200){
                 navigate("/Employee")
             }
         })
    }

   }
 const  OnValueChange =(input)=>{
  
    setEmployee((state)=>{
        return {
            ...state,
            [input.name]:input.value
        }
    })
   }

    return (
        <div className="container mt-3">
        <div className="card">
            <div className="card-header">
                <h2>Employee Create</h2>
            </div>
            <div className="card-body">
                <form onSubmit={onDataSubmit}>
                <div className="form-group">
                    <input type="hidden" value={getEmployee.id}  />
                    <div className="form-group">
                        <label>ICI</label>
                          <input type="text" className="form-control" placeholder="Icl" value={getEmployee.icl} name="icl" required onChange={(e)=>{ OnValueChange(e.target)  }} />
                    </div>

                    <div className="form-group">
                        <label>Name </label>
                    <input type="text" className="form-control" placeholder="Name" value={getEmployee.name} name="name"  required onChange={(e)=>{ OnValueChange(e.target)  }} />
                    </div>

                    <div className="form-group">
                        <label>Job</label>
                    <select  className="form-control" placeholder="Name" value={getEmployee.job} name="job"  required onChange={(e)=>{ OnValueChange(e.target)  }}>
                     {listOfDepartment.map(a=> <option value={a.name}> {a.name} </option>)}
                    </select>
                    </div>


                    <div className="form-group">
                        <label>Managment</label>
                    <select  className="form-control" placeholder="Name" value={getEmployee.managment} name="managment"  required onChange={(e)=>{ OnValueChange(e.target)  }}>
                    {listOfMangment.map(a=> <option value={a.name}> {a.name} </option>)}
                </select>      
                </div>
                 
                 <div className="form-group">
                    <label>Salary</label>
                <input type="number" className="form-control" placeholder="Salary" value={getEmployee.salary} name="salary"  required onChange={(e)=>{ OnValueChange(e.target)  }} />
                </div>

                <div className="form-group">
                    <label>Rate</label>
                <input type="rate" className="form-control" placeholder="Rate" value={getEmployee.rate} name="rate"  required onChange={(e)=>{ OnValueChange(e.target)  }} />


                <div className="form-group">
                <label>Total</label>
                <input  type="text" className="form-control" disabled  value={ isNaN(+getEmployee.salary + (+getEmployee.salary * (+getEmployee.rate/100))) ? 0 : (+getEmployee.salary + (+getEmployee.salary * (+getEmployee.rate/100))) } />
                  </div>
                </div>
        


                     <button type="submit" className="btn btn-success mt-2"> {id ? 'Edit' : 'Create'} </button>  
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default EmployeeCreate