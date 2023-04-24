import React, { useState, useEffect } from 'react';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {

  const [data, setData] = useState([]);
  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMTY1ODQ1LCJpYXQiOjE2ODIwNzk0NDUsImp0aSI6IjAwYmE0OTNlNDFkYTRkOGE4YzgwZDk4OTUwOTkyYjUyIiwidXNlcl9pZCI6M30.TD7eOhA9buK6fNqu9if8bbM-KxMZXtuZNicMVKqatAc");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    
    fetch('http://127.0.0.1:8000/userresume/',requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data){
        setData(data.data);
      }
   
      console.log(data)
    })

  }, []);
  
  const resumeSub = (id, name) => {
    console.log(id);
    console.log(name);
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMTY2ODc5LCJpYXQiOjE2ODIwODA0NzksImp0aSI6IjQ2ZjZjYzY4YzMwMjQxMDNiN2JiMjgzMDc4NWJmOGI0IiwidXNlcl9pZCI6M30.937RL_sNPvnkHqceE-BbznL-Uau14JrUPd9sQyR5eAM");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  // redirect: 'follow'.
}
fetch(`https://9d58-182-70-252-19.ngrok-free.app/download/${id}`,requestOptions)
.then(response => response.blob())
.then(blob => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  console.log("download is " +url);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'document.docx');
  document.body.appendChild(link);
  link.click();
});


}
  console.log(JSON.stringify(data))
  
  return (
    <>
      <Container fluid>
      <div style={{color:'#fff'}}>
       Display the data however you need
    </div>

    { data.map(item => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <button style={{backgroundColor:'red'}} onClick={() => resumeSub(item.id, item.name)}>Submit</button>
      </div>
    ))}
      </Container>
    </>
  );
}

export default TableList;
