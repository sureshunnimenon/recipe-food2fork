// no need for class.no state in this

import React, { Component } from 'react'
// import RecipeDetail from './RecipeDetails';

import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
  
  render() {
    const { recipes, handleDetails, value, handleSubmit, handleChange, error }= this.props;
    
    return (
      <React.Fragment>  
          {/* <h5>Hello from List</h5> */}
          <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/> 
          {/* <RecipeDetail />       */}
            <div className="container my-5">
                {/* title row */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted"> Recipe list </h1>
                    </div>
                </div>
                {/* end of title row */}

                <div className="row">
                  {
                    error ? <h1 className="text-danger text-center"> {error} </h1> : (
                        recipes.map(recipe => {
                            return (
                                <Recipe key={recipe.recipe_id} 
                                        recipe = {recipe}
                                        handleDetails = { () => handleDetails(0, recipe.recipe_id) } />
                            )
                        })
                    )
                  }
                    
                    
                </div>
            </div>

          
      </React.Fragment>

    )
  }
}
