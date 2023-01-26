// type sfc ( statelss function component ) and hit enter to get the template

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The blog website</h1>
            <div className="links">
                <a href="/">Home</a>

                {/* css style in react */}
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"red",
                    borderRadius:10,
                }}>New blog</a>
                {/* here we have used the dynamic value in form of object using two curly brackets {{ }} */}
                
            </div>
        </nav>
     );
}
 
export default Navbar;

// now go to app.js and then import this component

