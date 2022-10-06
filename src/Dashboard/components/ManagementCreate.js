import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const MangmentCreate =()=>{

    const [getMangement, setManagment]= useState({
        name:"",
        id:0
    });
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            axios.get(`https://catgo-bf777-default-rtdb.firebaseio.com/management/${id}.json`).then(a=>{
            
                setManagment((state)=>{
                    return {
                        id,
                        name: a.data.name
                    }
                 
                })
            })
        }

    },[])
   const onDataSubmit =(e)=>{
    e.preventDefault();
    if(!id){
            //create
          
            axios.post("https://catgo-bf777-default-rtdb.firebaseio.com/management.json",{
               name:getMangement.name
            }).then(a=>{
                if(a.status === 200){
                    navigate("/dashbaord/management")
                }
            })
    }
    else{
        //update

        axios.put(`https://catgo-bf777-default-rtdb.firebaseio.com/management/${id}.json`,{
            name:getMangement.name
         }).then(a=>{
             if(a.status === 200){
                 navigate("/Management")
             }
         })
    }

   }
 const  onNameChanged =(name)=>{
    console.log(name);
    setManagment((state)=>{
        return {
            ...state,
            name:name
        }
    })
   }

    return (
        <div className="container mt-3">
        <div className="card">
            <div className="card-header">
                <h2>Managment Create</h2>
            </div>
            <div className="card-body">
                <form onSubmit={onDataSubmit}>
                <div className="form-group">
                    <input type="hidden" value={getMangement.id}  />
                    <input type="text" className="form-control" placeholder="Name" value={getMangement.name} required onChange={(e)=>{ onNameChanged(e.target.value)  }} />
                     <button type="submit" className="btn btn-success mt-2"> {id ? 'Edit' : 'Create'} </button>  
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default MangmentCreate;