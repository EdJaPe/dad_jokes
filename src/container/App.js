import React, { Component} from "react";
import "./App.css";
import axios from "axios";
import JokeList from "../components/JokeList";



class App extends Component {
  constructor() {
    super();
      this.state = {
        jokes:[],
      }
    }
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://papajoke.p.rapidapi.com/api/jokes',
      headers: {
        'x-rapidapi-host': 'papajoke.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };
    axios.request(options).then((response) => {
      console.log(response.data)
      this.setState({jokes: response.data.items})
      
      console.log('🌊',this.state.jokes)
      
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  
  render(){
    const { jokes } = this.state;
    
    return (
      <div className="App">
      <h1>Dad Jokes</h1>
      <JokeList jokes={jokes} />
    </div>
  );
}
}

export default App;
