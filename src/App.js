import { Component } from 'react';
import klaus  from './klaus.jpg';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      show : true,
      Person : { 
                fullName : "Firas Setti",
                bio : "I am a fresh graduate student who got his Masters degree in Digital Marketing and Data Analytics, and his bachelors degree in Business English. Nowadays, I am studying at GoMyCode to become a FullStack Web Developer", 
                imgSrc: klaus, 
                profession:"FullStack Web Developement Student"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={klaus} alt="image peronel"/>
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;