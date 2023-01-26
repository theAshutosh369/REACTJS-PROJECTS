
import {useState} from 'react'
import './Expense.css'
export default function Expense(props) {

    var d = props.date
    var p = props.price

    
    const [title , setTitle] = useState(props.title)
    const [newTitle , setNewTitle] = useState('')


    function changeHandler( event )
    {
        setNewTitle(event.target.value)
    }

    function clickHandler( )
    {
        setTitle(newTitle)
    }

  return (
    <div>
        <h3>

        {d.getDate()}-{d.getMonth()}-{d.getFullYear()}   
        <span>{title}</span>
        <button> ${p} </button>
        <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={clickHandler}> change title </button>

        </h3>
        
    </div>

  )
}