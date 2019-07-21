import React, { Component } from 'react';
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
//   constructor(props){
//       super(props)

//       this.state = {
//           recipe: recipe,
//           url: `https://www.food2fork.com/api/get?key=6aa3b80b1d47cfce5d003be52d62c027&rId=${this.props.id}`
//       }
//   }  
//     async componentDidMount(){
//         try{
//             const data = await fetch(this.state.url)
//             const jsondata = await data.json()
//             console.log(jsondata)
//             this.setState({
//             recipe:jsondata.recipe
//           })
//           }
//           catch(err){
//             console.log(err)
//           }    
//     }

state = {
    recipe: recipe
}

async componentDidMount(){
    console.log(this.props.id)
    const id = this.props.id
    const url = `https://www.food2fork.com/api/get?key=e4ce8fb2652de0f6b50993918a105252&rId=${id}`;
    try {
        const data = await fetch(url)
        const jsondata = await data.json()
        console.log(jsondata)
        this.setState({
            recipe:jsondata.recipe
        });
    }
    catch(err){
        console.log(err);
    }
}
  
  render() {
    //   console.log(this.state.recipe);
    const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;

    const {handleIndex} = this.props;


    return (
      <React.Fragment>
         {/* <h6>Hi from Details</h6> */}
         <div className="container">
             <div className="row">
                 <div className="col-10 mx-auto col-md-6 col-lg-6 my-3">
                     <button type="button" 
                     onClick={() => handleIndex(1)}
                     className="btn btn-warning mb-5 text-capitalize"> Back to Recipe List </button>
                     <img src={image_url} className="d-block w-100" alt=""/>
                 </div>

                 <div className="col-10 mx-auto col-md-6 my-3">
                     <h6 className="text-uppercase"> {title}</h6>
                     <h6 className="text-warning yext-capitalize slanted-text"> Provided by: {publisher}</h6>
                     <a href={publisher_url} 
                     target="_blank" rel="noopener noreferrer" 
                     className="btn btn-primary mt-2 text-capitalize"> Publisher Url </a>
                     <a href={source_url} 
                     target="_blank" rel="noopener noreferrer" 
                     className="btn btn-success mt-2 text-capitalize  ml-5"> Recipe source </a>

                     <ul className="list-group mt-4">
                         <h2 className="mt-3 mb-4"> Ingredients </h2>
                         {
                             ingredients.map((ingredient,idx) => {
                                 return (
                                     <li key={idx} className="list-group-item text-slanted">
                                         {ingredient}
                                     </li>
                                 )
                             })
                         }
                     </ul>
                 </div>
             </div>
         </div>
      </React.Fragment>
    )
  }
}
