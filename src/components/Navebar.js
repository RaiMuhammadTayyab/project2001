import React from 'react';
import  {Breadcrumbs} from '@material-ui/core'
import{Link} from 'react-router-dom'


function Navebar() {
  return (
    <div>
     <Breadcrumbs maxItems={2} aria-label="breadcrumb"  >
  <Link color="inherit" to="/" >
   <h4>Home</h4> 
  </Link>
  <Link color="inherit" to="/about">
     <h4>About</h4>
  </Link>
  <Link color="inherit" to="/product" >
       <h4> Product</h4>
  </Link>
  
</Breadcrumbs>


    </div>
  );
}
export default Navebar;




