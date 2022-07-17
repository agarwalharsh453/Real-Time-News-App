import React, { Component } from 'react'

export  class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,date,author}=this.props;
        return (
            <div>
                <div className="card" >
                    
  <img src={imageUrl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}......</p>
   <p className="card-text"> <small className=" text-muted">
     By {!author?"Unknown":author} on {new Date(date).toTimeString()}
  </small></p>
    <a href={newsUrl} target="_blank" class="btn btn-dark ">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default Newsitem
