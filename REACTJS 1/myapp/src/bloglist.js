
// we have to give props parameter in anonymous function  
const Bloglist = ( p ) => {

    // props works as its an object 
    const blogs = p.blogs
    const title = p.title

    return( 
        <div className="blog-list">

            {/* title has been used here from home.js */}
            <h1>{title}</h1> 

            {/* below code is same as that of above solution */}
            { blogs.map( (b) => (
                <div className="blog-preview">
                    <h2>{b.title}</h2>
                    <p>{b.body}</p>
                    <span>Written by {b.author} </span>
                
                </div>
            ) )}

        </div>

    );
}
 
export default Bloglist;