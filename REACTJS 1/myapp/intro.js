// react is a javascript library
// it allows us to create single page apps (spa)


// complete react tutorial ( iamshaunjp) - github , checkout for all the codes of react lessons 

// to run the main app.js file make sure you are in the myapp directory and then hit command in terminal 'npm run start'





// --------------------------------------------------------------------------------

// USING VARIABLES 

// function App() {

//   // you can write javascript code here b4 the return function 
//   const v = "welcome to the new blog "
//   const n = 50 
//   // remember we cannot output booleans and object type variables

//   // link as a varible 
//   const link = "https://www.google.com/"


//   return (
//     <div className="App">
//       <div className="content"> 

//         <h1> {v} </h1> 
//         <h1> liked {n} times </h1>
//         {/* { variable } means prints the variable in the html on the browser . see the output by running the app . we have to use the {} curly brackets for that */} 


//         {/* you can write directly like below */}
//         <h1> { "krishna-arjuna" }</h1>
//         <h1> {100} </h1>
//         <span> { [1,2,3,4,5,6] } </span> <span>Array</span>
//         <h1> { Math.random()*10 } </h1>
 

//         {/* you can add link to by using a varible . its useful when the link is very long and you have to add links in multiple spots  */}
//         <a href={link}> go to google </a>

//       </div>
//     </div>
//   );
// }

// export default App;


// --------------------------------------------------------------------------------

// FUNCTIONS AND EVENTS

// const Home = () => {

//     // function eg
//     const handleClick = () => {
//         console.log("hello Bro !! ")
//     }

//     // parameterised function eg
//     const handleClickAgain = (name) =>{
//         console.log("hello "+name)
//     }


//     return ( 
//         <div className="home">
//             <h1>Its a homepage</h1>

//             {/* passing anonumous function as dynamic value. remember not to write () after the function name otherwise it will automatically run after loading the website */}
//             <button onClick={handleClick}>click me </button>

//             {/* passing parameters in anonymous function  */}
//             <button onClick={ ()=>handleClickAgain('Ashutosh')}>click me again</button>
        
//         </div>
//      );
// }
 
// export default Home;




// --------------------------------------------------------------------------------

// USING STATE (useState hook)

// // first we have to import useState from react  library 
// import { useState } from 'react'


// const Home = () => {

//     // setting usestate variables for every variable which is going to be changed 
//     const [ name , setName ] = useState("Ashutosh")
//     const [ age , setAge ] = useState(20)


//     const handleClick = () => {
//         // onClicking button the variable values will be changed 
//         setName("Arjun")
//         setAge(100)
//     }


//     return ( 
//         <div className="home">
//             <h1>Its a homepage</h1>

//             {/* this is the line we have to change by click */}
//             <h1> {name} is {age} years old</h1>

//             <button onClick={handleClick}>click me </button>
            
    
//         </div>
//      );
// }
 
// export default Home;

// -------------------------------------------------------------------------------

// PRINTING BLOG AS IT IS 

// // first we have to import useState from react  library 
// import { useState } from 'react'


// const Home = () => {

//     const [blogs , setBlogs] = useState([
//          { title:"First blog", body:"written something " , author:"ash", id:1} ,
//         { title:"Second blog", body:"written something " , author:"ram",  id:2} ,
//         { title:"Third blog", body:"written something " , author:"arjun",  id:3} ,
//          { title:"Fourth blog", body:"written something " , author:"raju",  id:4} ,
//         ])
    
//     return ( 
//         <div className="home">
//             <h1>Its a homepage</h1>

//             {/* useState use krun list of object print karnyasathi */}
//             {/* dynamic value vaprun means {} vaprun map lavlay list mdhe pratyek object get krnyasathi . b as object krtay b.id ne current id get kru shakto   */}
//             { blogs.map( (b) => (
//                 <div className="blog-preview">
//                     <h2>{b.title}</h2>
//                     <p>{b.body}</p>
//                     <span>Written by {b.author} </span>
                
//                 </div>
//             ) )}

//         </div>
//      );
// }
 
// export default Home;

// -------------------------------------------------------------------------------

// PROPS 

// // first we have to import useState from react  library 
// import { useState } from 'react'
// import Bloglist from './bloglist';


// const Home = () => {

//     const [blogs , setBlogs] = useState([
//          { title:"First blog", body:"written something " , author:"ash", id:1} ,
//         { title:"Second blog", body:"written something " , author:"ram",  id:2} ,
//         { title:"Third blog", body:"written something " , author:"arjun",  id:3} ,
//          { title:"Fourth blog", body:"written something " , author:"raju",  id:4} ,
//         ])
    
//     return ( 
//         <div className="home">

//             <h1>Its a homepage</h1>

//             {/* the properties inside blogpost are called props */}
//             {/* blogs and title are props */}
//             {/* we have to use them in blogpost component using props object */}
//             {/* see in the blogpost.js file */}
//             <Bloglist blogs={blogs} title="this is title"/>

//             <Bloglist blogs={blogs.filter( (b)=> b.author==='arjun')} title="Arjuna's blog" />
            
//         </div>
//      );
// }
 
// export default Home;

// // we have to give props parameter in anonymous function  
// const Bloglist = ( props ) => {

//     // props works as its an object 
//     const blogs = props.blogs
//     const title = props.title

//     return ( 
//         <div className="blog-list">

//             {/* title has been used here from home.js */}
//             <h1>{title}</h1> 

//             {/* below code is same as that of above solution */}
//              { blogs.map( (b) => (
//                 <div className="blog-preview">
//                     <h2>{b.title}</h2>
//                     <p>{b.body}</p>
//                     <span>Written by {b.author} </span>
                
//                 </div>
//             ) )}


//         </div>
//      );
// }
 
// export default Bloglist;


// -------------------------------------------------------------------------------


// FUNCTION AS PROPS ( DELETE BLOG )

// // first we have to import useState from react  library 
// import { useState } from 'react'
// import Bloglist from './bloglist';


// const Home = () => {

//     const [blogs , setBlogs] = useState([
//         { title:"First blog", body:"written something " , author:"ash", id:1} ,
//         { title:"Second blog", body:"written something " , author:"ram",  id:2} ,
//         { title:"Third blog", body:"written something " , author:"arjun",  id:3} ,
//         { title:"Fourth blog", body:"written something " , author:"raju",  id:4} ,
//         ])
    

//     const handleDelete = (id)=>{
//         const newBlogs = blogs.filter( b=>b.id!=id)
//         setBlogs(newBlogs)
//     }
    
//     return( 
//         <div className="home">

//             <h1>Its a homepage</h1>

//             {/* the properties inside blogpost are called props */}
//             {/* blogs and title are props */}
//             {/* we have to use them in blogpost component using props object */}
//             {/* see in the blogpost.js file */}
//             <Bloglist blogs={blogs} title="this is title" handleDelete={handleDelete} />

//         </div>
//     );
// }
 
// export default Home;


// // we have to give props parameter in anonymous function  
// const Bloglist = ( p ) => {

//     // props works as its an object 
//     const blogs = p.blogs
//     const title = p.title
//     const handleDelete = p.handleDelete

//     return( 
//         <div className="blog-list">

//             {/* title has been used here from home.js */}
//             <h1>{title}</h1> 

//             {/* below code is same as that of above solution */}
//             { blogs.map( (b) => (
//                 <div className="blog-preview">
//                     <h2>{b.title}</h2>
//                     <p>{b.body}</p>
//                     <span>Written by {b.author} </span>
                
//                     <button onClick={ ()=> handleDelete(b.id)}>Delete blog</button>
//                 </div>
//             ) )}

//         </div>

//     );
// }
 
// export default Bloglist;

// -------------------------------------------------------------------------------------------

// USEEFFECT HOOK

// import { useState , useEffect } from 'react'

// useEffect( ()=>{
//     console.log("useEffect ran ! ")
// })
    
// USEEFFECT HOOK DEPENDENCIES

//  useEffect( ()=>{
//         console.log("useEffect ran ! ")
//     } , [name] )
// [name] is dependency, means whenever the value of name changes it will run 


// -------------------------------------------------------------------------------------------

// USING JSON SERVER

// Created a data folder and db.json file inside it.
// written some code in db.json inside it. its actually the blogs database 
// then created new terminal and hit the command in working directory 'npx json-server --watch data/db.json --port 8000' and run 





// -------------------------------------------------------------------------------------------




















