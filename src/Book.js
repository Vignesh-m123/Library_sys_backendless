import axios from 'axios';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Data  from './Data.json';
import  {Table} from 'reactstrap';
import './Signup.css'
import Logout from './Logout';
const  Book = () =>{
    const stat ="vig";

    const booksubmit = (item)=>{
      
        let bookname =item.bookname;
        let id =item.id;

        let url=`http://localhost:8000/book/${id}`;

        if(item.bookstatus==="true"){        
        let bookstatus = "false";
        let bookuser=stat;
        let data={bookuser,id,bookstatus,bookname};
        axios.put(url,data)
        .then(response=>console.log(response))
        .catch(error=>{throw error});
        alert("Book take successfull");
        }
        else if(item.bookstatus==="false"){        
        let bookstatus = "true";
        let bookuser="";
        let data={bookuser,id,bookstatus,bookname};
        axios.put(url,data)
        .then(response=>console.log(response))
        .catch(error=>{throw error});
        alert("Book Returned successfull");

        }
        
    };

    const tab = ()=>{
      return (
        <div>
       
        <h1 className="h1 display-1 fluid-container text-center">Library Management System </h1>
      <Table hover borderless responsive bordered className="Table table-bordered  table-info	 container col-sm-5 ">
        <thead>
      <tr className="table-primary">
        <th scope="col">BOOK ID</th>
        <th scope="col">BOOK NAME</th>
        <th scope="col">BOOK STATUS</th>
        <th scope="col"> </th>
      </tr>      
      </thead>
     
        <tbody>
         {Data.book.map((item) =>
        <tr key = {item.id} >
        <td > {item.id}</td>
          <td> {item.bookname} </td>
          <td > {item.bookstatus=='true'? "Available" : "Unavailable" }</td>
          <td >  {item.bookstatus=='true' ? <button onClick={()=>{booksubmit(item)} }>Take</button> 
          :     <button disabled={ (item.bookuser==stat) ? false : true} onClick={()=>{booksubmit(item)}}>
           {item.bookuser==stat?"Return":"Can't Take"}
          </button>}</td>
          </tr>)
          }
          </tbody>
          </Table>
          <span className="nan text-center"><Logout/></span>
          </div>
          );     
      }
return tab();
}
export default Book;