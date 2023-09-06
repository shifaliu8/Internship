import Styles from './Button.module.css';
function Components(props) {
    return(
    <div className="Components">
    
     <section className="jumbotron text-center">
        <div className="container">
         <h1>{props.title}</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
            <button className="btn btn-primary my-2">Main call to action</button>
            <button className="btn btn-secondary my-2">Secondary action</button>
            </p>
       </div>
      </section>
    
    </div>
    
    );   
}
export default Components;