function Button(props){
    return(
        <div className="Buttons">

        <div className="btn-group">
                 <button style={props.style} className="rounded">{props.title}</button>
                
              </div>
       
       </div>
    )

}
export default Button;