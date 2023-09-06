function Button(props){
    return(
        <div className="Buttons">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary">{props.title}</button>
                </div>
       </div>
    )

}
export default Button;