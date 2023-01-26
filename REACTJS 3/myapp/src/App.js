
import Expense from './Components/Expense'
import './App.css'
import Form from './Components/Form'
import {useState} from 'react'


function App() 
{

  var array = [
    {
      date:new Date(2022,11,5),
      title:"Books",
      price:300
    } ,

    {
      date:new Date(2022,3,29),
      title:"shoes",
      price:400
    } ,

    {
      date:new Date(2022,2,4),
      title:"shirts",
      price:1000
    } ,

    {
      date:new Date(2022,8,10),
      title:"pants",
      price:900
    } 

  ]

  

  const [arr , setArr ] = new useState(array)
  function dataHandler( e )
  {
    const update = [ ...arr , e ]
    setArr(update)
  }


  fetch('http://localhost:5000/api/expenses').then(res=>res.json).then(data=>{
    console.log(data)
    setArr(data)}
    )
   
  return (

    <div className="body" >

      <Form onSubmit={dataHandler}/>

      {  arr.map( (a)=>(
        <Expense 
      date={a.date} 
      title={a.title} 
      price={a.price}/>
      )) 
      }
      

    </div>


  );

}

export default App;
