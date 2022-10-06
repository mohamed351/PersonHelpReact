import axios from "axios";
import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";

const ManagementList= ()=>{
   const  [getManagments,setManagments] = useState([]) 
     useEffect(()=>{
        axios.get("https://catgo-bf777-default-rtdb.firebaseio.com/management.json").then(a=>{
         let array = [];
         for(var item in a.data){
           array.push({id:item,name:a.data[item].name})
         }
        
          setManagments(array);
         
        });
     },[]);

   const onDeleteRow = (id) =>{   
    axios.delete(`https://catgo-bf777-default-rtdb.firebaseio.com/${id}.json`).then(a=>{
          setManagments((state)=>{
            return state.filter(a=> a.id !== id)
          });
       });
    
    }
    return (
        <div className="container mt-2">
            <Link to="/Management/Create" className="btn btn-success"> Create</Link>
            <table className="table">
               <thead>
                 <tr>
                    <th>Name</th>
                    <th></th>
                 </tr>
               </thead>
               <tbody>
                {getManagments.map(a=>(
                    <tr>
                        <td>{a.name}</td>
                        <td> <Link to={`/Management/Create/${a.id}`} className="btn btn-primary"  > Edit</Link> | 
                        <button className="btn btn-danger" onClick={()=> onDeleteRow(a.id)}>Delete </button> </td>
                     
                    </tr>
                ))}
               </tbody>
            </table>
        </div>
    )

}

export default ManagementList;