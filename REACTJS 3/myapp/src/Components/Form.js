
import {useState} from 'react'
import './Form.css'
function Form( props ) {

  const [Title , setTitle] = useState('')
  const [date , setDate] = useState('')
  const [price , setPrice] = useState('')


  function titleHandler( event )
    {
        setTitle(event.target.value)
    }

    function dateHandler( event )
    {
        setDate(event.target.value)
    }
    function priceHandler( event )
    {
        setPrice(event.target.value)
    }

    function submitHandler( event )
    {

      // to stop refreshing the page after submit button 
        event.preventDefault()

        const data = {
          title: Title ,
          date :new Date(date) ,
          price: price 
        }

        // sending data to app.js 
        props.onSubmit(data)
        

        // to make all the fields empty after submit 
        setPrice("")
        setDate("")
        setTitle("")

    }



  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="title">
            <label >title : </label>
            <input type="text" value={Title} onChange={titleHandler}/>
        </div>

        <div className="date">
            <label >date : </label>
            <input type="date" value={date} onChange={dateHandler}/>
        </div>

        <div className="price">
            <label >price : </label>
            <input type="number" value={price} onChange={priceHandler} />
        </div>

        <div className="submit">
          <button type="submit"> Add Expense </button>
        </div>
    </form>
  )
}
export default Form