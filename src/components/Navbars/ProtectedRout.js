import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

function ProtectedRout(props) {
     const {Component} = props
     console.log(Component)
     let history = useHistory();
 
     useEffect(()=>{
         let login = JSON.parse(localStorage.getItem("login"));
         if(!login){
          history.push("/SignIn");
         } 
     })
  return (
    <div>
    <Component/>
    </div>
  )
}

export default ProtectedRout