import React, { useEffect,useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import axios from "axios";
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
  Modal,
} from "react-bootstrap";
 import DataTable from "react-data-table-component";

function MyResume() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadResume = async () => {
      setLoading(true);
    let store = JSON.parse(localStorage.getItem("login"));
    if(store.token){
      let authToken = store.token
    }else{
      alert('404 page not found')
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
      const response = await axios(`http://16.16.70.121/userresume/`,{
      method: "GET",
      headers :{
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    if(response){
      
      console.log(response);
      setData(response.data.data)

    }
      setLoading(false);
    }
    setTimeout(() => {
      loadResume();
    }, 1000);
    
  }, []);

  //Table 

  const columns = [
      {
      name:'User Name',
      selector: (row) =>row.name,
      sortable: true
    },

    {
      name:'User email',
      selector: (row) =>row.email,
      sortable: true
    },
   
    {
      name:'File Size',
      selector: '235KB',
      sortable: true
    },
    {
      name:'Download',
      cell: row =><button 
      onClick={(edata)=> downloadCv(edata.id)}
      variant="success"
      style={{
        color: "#fff",
        backgroundColor: "#05cb65",
        border: "none",
      }}>Download</button>
    },
  ]
    

const downloadCv = (id) =>{
  let store = JSON.parse(localStorage.getItem("login"));
  let authToken = store.token;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);
     console.log(myHeaders)
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${process.env.REACT_APP_BASE_URL}download/`, requestOptions)
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'document.docx');
    document.body.appendChild(link);
    link.click();
  });
}
  return (
    <>
      <Container fluid>
        <DataTable 
        title ="Resume List"
        columns= {columns} 
        data ={data}
        fixedHeader
        selectableRows
        highlightOnHover 
        pagination/>
      </Container>
    
    </>
  );
}

export default MyResume;
