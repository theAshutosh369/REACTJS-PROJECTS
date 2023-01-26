
import React,{useState} from 'react'

function Form(){
    
    const [username , setUsername] = useState('Ash')
    const [age , setAge] = useState(20)

    const handleSubmit = (e)=>{
       alert(username +" " + age  )
    }

    const handleUser=(e)=>{
        setUsername(e.target.value)
    }
     const handleAge=(e)=>{
        setAge(e.target.value)
    }

    return (
        <form>
            <label>Username :<input type="text" onChange={handleUser}/> </label>
            <label>Age :<input type="number" onChange={handleAge} /> </label>

            <button onClick={handleSubmit}>submit</button>
        </form>
  )
}

export default Form;