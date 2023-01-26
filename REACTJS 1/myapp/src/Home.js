
// first we have to import useState from react  library 
import { useState , useEffect } from 'react'
import Bloglist from './bloglist';


function Home(){

    const [blogs , setBlogs] = useState([])

    const getdata=()=>{
        fetch('http://localhost:8000/blogs')
        .then(function(res){pp
            if(!res.ok){ throw Error("Could not fetch the message !")}
            return res.json();})
        .then(function(data){setBlogs(data);})
    }

    useEffect( ()=>{
        getdata()
        .catch(err=>{console.log(err.message)})

    } , [] ); 

   
    return( 
        <div className="home">

            <h1>Its a homepage</h1>
            { blogs && <Bloglist blogs={blogs} title="this is title"  /> }

        </div>
    );
}
 
export default Home;



