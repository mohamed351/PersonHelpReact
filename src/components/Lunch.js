import { useEffect, useState } from "react";

function Lunch() {
   const [getterlist,setList] =useState([])
 
  useEffect(()=>{
   
    fetch("https://catgo-bf777-default-rtdb.firebaseio.com/employees.json").then(a=>{
      return a.json()
    }).then(a=>{
      let array = [];
      for(var item in a){
        array.push(a[item]);
      }
      setList(array);
      console.log(getterlist);
    })
  },[])
    return(
<div className="container-fluid mt-2">
<table className="table table-dark table-hover">


  <thead>
    <tr>
      <th scope="col">ICL</th>
      <th scope="col">الاسم</th>
      <th scope="col">الادارة</th>
      <th scope="col">الوظيفة</th>
      <th scope="col">المبلغ المستحق</th>
      <th scope="col"> نسبة الزيادة</th>
      <th scope="col"> المستحق الجديد</th>


    </tr>
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
      </tr>
    ))}
  </tbody>
</table>



</div> 
    );
    
}

export default Lunch;


