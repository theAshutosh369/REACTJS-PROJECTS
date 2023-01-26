
import './Style.css'

const Stylesheet = (p) => {
    const cls = p.cls
    return ( 
        <div className={`${cls} clr bg`}>
            hello stylesheet 
        </div>
    );
}
 
export default Stylesheet;