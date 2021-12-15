import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';

function App() {


  const a = 3;
  document.getElementById("tabelka1").onclick = function() {myFunction1()};
  document.getElementById("tabelka2").onclick = function() {myFunction2()};
  document.getElementById("tabelka3").onclick = function() {myFunction3()};
  document.getElementById("tabelka4").onclick = function() {myFunction4()};

  function myFunction1() {
      document.getElementById("tabelka1").innerHTML = "Kliknąłeś tabelę products";
  }
  function myFunction2() {
      document.getElementById("tabelka2").innerHTML = "Kliknąłeś tabelę clients";
  }
  function myFunction3() {
      document.getElementById("tabelka3").innerHTML = "Kliknąłeś tabelę managers";
  }
  function myFunction4() {
      document.getElementById("tabelka4").innerHTML = "event_details";
  }


  const [data, setData] = useState([])
  const columns = [
    { title : "ID", field: "id"},
    { title : "Name", field: "name"},
    { title : "Price", field: "price"},
    { title : "Description", field: "description"},
    { title : "Amount", field: "amount"}
  ]
  const [data2, setData2] = useState([])
  const columns2 = [
    { title : "ID", field: "id"},
    { title : "First Name", field: "first_name"},
    { title : "Last Name", field: "last_name"},
    { title : "Password", field: "password"},
    { title : "Email", field: "email"},
    { title : "CardNumber", field: "cardNumber"}
  ]
  const [data3, setData3] = useState([])
  const columns3 = [
    { title : "ID", field: "id"},
    { title : "FirstName", field: "firstName"},
    { title : "LastName", field: "lastName"},
    { title : "Position", field: "position"},
  ]
  const [data4, setData4] = useState([])
  const columns4 = [
    { title : "ID", field: "id"},
    { title : "New Price", field: "newPrice"},
    { title : "Description", field: "description"},
    { title : "Discount", field: "discount"},
  ]
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/api/clients")
      .then(resp => resp.json())
      .then(resp => {
        setData2(resp)
      })
  }, [])
  useEffect(() => {
    fetch("http://localhost:8080/api/managers")
      .then(resp => resp.json())
      .then(resp => {
        setData3(resp)
      })
  }, [])
  useEffect(() => {
    fetch("http://localhost:8080/api/event_details")
      .then(resp => resp.json())
      .then(resp => {
        setData4(resp)
      })
  }, [])
  if(a === 1) {
   return (

    <div className="App">
       <h1>React App</h1>
      <MaterialTable
        title="Produkty"
        data={data}
        columns={columns}
      />
    </div>
  );
   }
   if(a === 2) {
    return (
      <div className="App">
         <h1>React App</h1>
        <MaterialTable
          title="Clients"
          data={data2}
          columns={columns2}
        />
      </div>
    );
   }
   if(a === 3) {
    return (
      <div className="App">
         <h1>React App</h1>
        <MaterialTable
          title="managers"
          data={data3}
          columns={columns3}
        />
      </div>
    );
   }
   if(a === 4) {
    return (
      <div className="App">
         <h1>React App</h1>
        <MaterialTable
          title="event_details"
          data={data4}
          columns={columns4}
        />
      </div>
    );
   }


  }

export default App;