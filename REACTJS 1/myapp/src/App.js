import Navbar from './Navbar';
import Home from './Home';
// imported Navbar and Home 



function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* put the imported Navbar here and it will load all the html at this place */}
      <div className="content"> 
        <Home></Home>
        {/* you can add it directly writing name and hiting enter means without self closing tag  */}
      </div>

    </div>
  );
}

export default App;
