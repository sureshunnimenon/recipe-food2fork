import React, { Component } from 'react'
// no need for class no state in this component

export default class Recipe extends Component {
  render() {
    console.log(this.props.recipe)
    const {image_url, title, source_url, publisher, recipe_id } = this.props.recipe;

    const {handleDetails} = this.props;

    return (
      <React.Fragment>
            {/* <h4>Hi from Recipe component</h4> */}
           <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <img src={image_url} 
                         className = "img-card-top" 
                         style = { {height: "14rem"} }
                         alt="recipe"/>
                    <div className="card-body text-capitalize text-danger">
                        <h6> {title}</h6>
                    </div>
                    <h6 className="text-warning text-slanted"> {publisher}</h6>
                </div>

                {/* end of card */}
                {/* now, the detail and url links */}

                <div className="card-footer">
                    <button type="button" 
                            className="btn btn-primary text-capitalize"
                            onClick= {handleDetails}> details </button>
                    <a href={source_url} className="btn btn-success mx-2 text-capitalize"
                       target="_blank"> recipe url </a>
                </div>
           </div>
           
           
      </React.Fragment>
    )
  }
}
