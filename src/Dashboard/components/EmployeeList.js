import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
const EmployeesList =()=>{
    const [getterlist,setList] =useState([])
    useEffect(()=>{
   
        fetch("https://catgo-bf777-default-rtdb.firebaseio.com/employees.json").then(a=>{
          return a.json()
        }).then(a=>{
          let array = [];
          for(var item in a){
            array.push({id:item , ...a[item]});
          }
          setList(array);
    
        })
      },[]);

      const onDeleteRow = (id) =>{   
        axios.delete(`https://catgo-bf777-default-rtdb.firebaseio.com/employees/${id}.json`).then(a=>{
            setList((state)=>{
                return state.filter(a=> a.id !== id)
              });
           });
        
        }

    return (
        <div className="container mt-2">
            <Link to="/Employee/Create" className='btn btn-success mb-2'> Create</Link>
            <div>
                <table className='table table-responsive'>
                    <thead>
                        <th>ICI</th>
                        <th>Name</th>
                        <th>Managment</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Increse Rate</th>
                        <th>Total</th>
                        <th></th>
                    </thead>

                    <tbody>
                    {getterlist.map(a=>(
                    <tr>
                        <td>{a.icl}</td>
                        <td>{a.name} </td>
                        <td>{a.managment} </td>
                        <td>{a.job} </td>
                        <td>{a.salary} </td>
                        <td>{a.rate} </td>
                        <td>{a.salary + (a.salary * (a.rate/100))}</td>
                        <td> 
                        <td> <Link to={`/Employee/Create/${a.id}`} className="btn btn-primary"  > Edit</Link> | 
                        <button className="btn btn-danger" onClick={()=> onDeleteRow(a.id)}>Delete </button> </td>
                        </td>
                    </tr>
                    ))}

                    </tbody>
                </table>


            </div>
        </div>
    )

}

export default EmployeesList;