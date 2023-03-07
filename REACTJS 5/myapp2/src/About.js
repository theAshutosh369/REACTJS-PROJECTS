
import { useLocation } from "react-router-dom";

function About( ) {

    const loc = useLocation();

    function display()
    {
      if( loc.pathname===`/About`)
      {
        return <h1>Click me </h1>
      }
      else{
        return <h1> NAhhhh</h1>
      }
    }

  return (
    <>
      <h1>{loc.pathname}</h1>
      {()=>{
          display()
      } }
    </>
  );
}
export default About;