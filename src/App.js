import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Data from "./components/Data";
import Lunch from "./components/Lunch";


import { Routes, Route} from "react-router-dom";
import PrintThisComponent from "./components/print";
import ManagementList from "./Dashboard/components/MangementList";
import MangmentCreate from "./Dashboard/components/ManagementCreate";
import DepartmentList from "./Dashboard/components/DepartmentList";
import DepartmentCreate from "./Dashboard/components/DepartmentCreate";
import EmployeesList from "./Dashboard/components/EmployeeList";
import EmployeeCreate from "./Dashboard/components/EmployeeCreate";
import Root from "./Dashboard/components/Root";
function App() {
  return (
    <div className="App">


<Navbar />
<div className="d-flex justify-content-end ">

</div>
<Routes>
<Route path="/" element={<Lunch />} />
<Route path="/root" element={ <Root />}></Route>

<Route  path="Department" element={<DepartmentList />} />
<Route  path="Department/Create" element={<DepartmentCreate />} />
<Route  path="Department/Create/:id" element={<DepartmentCreate />} />

<Route  path="Management" element={<ManagementList />} />
<Route  path="Management/Create" element={<MangmentCreate />} />
<Route  path="Management/Create/:id" element={<MangmentCreate />} />


<Route  path="Employee" element={<EmployeesList />} />
<Route  path="Employee/Create" element={<EmployeeCreate />} />
<Route  path="Employee/Create/:id" element={<EmployeeCreate />} />

<Route path="/Data" element={<Data />} />

<Route path="/Lunch" element={<Lunch />} />


</Routes>



</div>
  );
}

export default App;
