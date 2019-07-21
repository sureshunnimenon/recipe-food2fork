import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
// import {recipes}  from './tempList'
// import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: [],
    url:"https://www.food2fork.com/api/search?key=e4ce8fb2652de0f6b50993918a105252",
    base_url: "https://www.food2fork.com/api/search?key=e4ce8fb2652de0f6b50993918a105252",
    details_id: '',
    pageIndex:1,
    search: "",
    query: '&q=',
    error: ""
  }

  async getRecipes(){
    try{
      const data = await fetch(this.state.url)
      const jsondata = await data.json()

      if(jsondata.recipes.length === 0) {
        this.setState(()=> {
          return {error: "sorry your search did not return any result, try with meaningful text"}
        })
      }
      else {
        this.setState(()=>{
          return {recipes:jsondata.recipes, error: ""}
        })
      }      
    }
    catch(err){
      console.log(err)
    }    
  }

  componentDidMount(){
    this.getRecipes();
  }

  handleIndex = index => {
    this.setState({
        pageIndex:index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello from handle submit")
    const { base_url, query, search } = this.state;
    this.setState(() => {
      return {url: `${base_url}${query}${search}`, search:""}
    }, () => {
      this.getRecipes();
    })
  }

  displayPage= (index) => {
    switch(index){
      default:
      case 1:
      return (
        <RecipeList recipes = {this.state.recipes}
                    handleDetails = {this.handleDetails} 
                    value = {this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit= {this.handleSubmit}
                    error = {this.state.error}/>
      )
      case 0:
      return (
        <RecipeDetails id ={this.state.details_id}
                       handleIndex={this.handleIndex} /> 
      )
    }
  }  

  render(){
    // console.log(this.state.recipes)
    return (
      <div className="App">
        <header >
            {/* <h3>Recipes using Food2Fork API</h3> */}
            {/* <RecipeSearch /> */}
            {this.displayPage(this.state.pageIndex)}         
            
        </header>
      </div>
    );
  }  
}

export default App;
