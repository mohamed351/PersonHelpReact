import { Link } from "react-router-dom";


function Navbar() {
    return(

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">

  <a className="navbar-brand" href="https://www.facebook.com/mohamed.fouad.2015">
                <img src={require('./1.jpg')} alt="" width="50" height="40"/>
              </a>
    <a className="navbar-brand" href="#">الهيئة العامة للتحكيم واختبارات القطن</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


      {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            بيانات
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="">صرفيات سابقة</a></li>
            <li><a className="dropdown-item" href="#">نسخة اصلية</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">كشوف تعديل</a></li>
          </ul>
        </li> */}


        <li className="nav-item">
          <Link className="nav-link" to="/Lunch"> الصرفية الحالية</Link>
        </li>

        
        <li className="nav-item">
          <Link className="nav-link" to="/Root"> Login  </Link>
        </li>

{/* 
        <li className="nav-item">
          <Link className="nav-link" to="/Data">بدل غداء</Link>
        </li> */}

     
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page"to="/">الرئيسية</Link>
        </li> */}


      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="بحث" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">بحث</button>
      </form> */}
    </div>
  </div>
</nav>


  

    );
    
}

export default Navbar;