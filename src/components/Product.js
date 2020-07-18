import React from 'react';
import Shoes from './../shoes.json'
import{ Link } from 'react-router-dom'
import { lightBlue } from '@material-ui/core/colors';

function product() {
 
    return (
    <div >
     <h1 text-color={lightBlue}>(Welcome to Shoe Shop)</h1>
     <div className="productcontainer">
         {Object.keys(Shoes).map(keyName=>{
         const shoe = Shoes[keyName]
    return (
<Link key={keyName} className="link" to ={"product/"+ keyName}>
         <h4> {shoe.name}</h4>
         <img src={shoe.img} height={150} alt="shoe"/>
</Link>)

         })}
     </div>
    </div>
  );
}
export default product;
